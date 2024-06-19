const EchangeurLog = [{}, {}, {}, {}, {}, {}];
const webDbName = "https://esifly.fr/cors.php?url=http://192.168.10.111:3010/";
const webUrlAgent = "echangeur";
class Action {
  constructor(fonction, parametres, i, o, d) {
    this.echangeur = null;
    this.a = null;
    this.f = fonction;
    this.p = parametres;
    this.i = i;
    this.o = o;
    this.d = d;
  }
  clone() {
    return new Action(this.f, this.p, this.i, this.o, this.d);
  }
  getProcedure() {}
  setOutput(data) {
    if (!this.o) return this;
    var tn = this.o.split(".");
    if (tn.length == 2) {
      if (!this.echangeur[tn[0]]) this.echangeur[tn[0]] = {};
      var x = this.echangeur[tn[0]];
      x[tn[1]] = data;
    } else if (tn.length == 1) {
      this.echangeur[tn[0]] = data;
    }
    return this;
  }
  setInput(data, echangeur) {
    if (!this.i) return this;
    echangeur = echangeur || this.echangeur;
    var tn = this.i.split(".");
    if (tn.length == 2) {
      if (!echangeur[tn[0]]) echangeur[tn[0]] = {};
      var x = echangeur[tn[0]];
      x[tn[1]] = data;
    } else if (tn.length == 1) {
      echangeur[tn[0]] = data;
    }
  }
  getInput() {
    var tn = this.i.split(".");
    var x = this.echangeur[tn[0]];
    if (tn.length == 2) {
      return !x ? null : x[tn[1]];
    } else if (tn.length == 1) {
      return this.echangeur[tn[0]];
    }
  }
  getOutput(echangeur) {
    echangeur = echangeur || this.echangeur;
    var tn = this.o.split(".");
    var x = echangeur[tn[0]];
    if (tn.length == 2) {
      return !x ? null : x[tn[1]];
    } else if (tn.length == 1) {
      return x;
    }
  }
}

class Echangeur {
  // name nest pas compliquee
  constructor(name) {
    this.name = name;

    this.actions = [];
    this.messages = [];
    this.loginInfo = null;
    this.formData = null;
    this.hash = null;
  }
  set(key, value) {
    this[key] = value;
  }
  get(key) {
    return this[key];
  }
  onMessage(message) {}
  pushAction(action) {
    this.actions.push(action);
  }
  addAction(fonction, parametres, i, o, d) {
    this.actions.push(new Action(fonction, parametres, i, o, d));
    return this;
  }
  getNextAction() {
    var action = this.actions.shift();
    action.echangeur = this;
    return action;
  }
  setErreurEch(message, textStatus) {
    this.erreur = {};
    this.erreur.message = message;
    this.erreur.textStatus = textStatus;
  }
  addMessage(action, message) {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var d =
      (h < 10 ? "0" + h : "" + h) +
      ":" +
      (m < 10 ? "0" + m : "" + m) +
      ":" +
      (s < 10 ? "0" + s : "" + s) +
      " ";
    var u = action ? "Table : " + action.t + " -- " : "";
    this.messages.push(d + u + message);
    this.onMessage(d + u + message);
  }
  clone() {
    // d destination de la requete
    //
    var echangeurServeur = new Echangeur(this.name);
    //
    if (this.loginInfo) echangeurServeur.loginInfo = this.loginInfo;
    if (this.hash) echangeurServeur.hash = this.hash;
    if (this.formData) echangeurServeur.formData = this.formData;
    //
    for (const action of this.actions) {
      action.echangeur = this;
      var actionServeur = action.clone();
      echangeurServeur.pushAction(actionServeur);
      actionServeur.setInput(action.getInput(), echangeurServeur);
    }
    return echangeurServeur;
  }
  // Logout, post /logout au serveur qui effectue un session.destroy;
  static async logout() {
    const baseUrl = webDbName;
    const url = baseUrl + "logout";
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };
    let fetchResponse = await fetch(url, settings);

    window.location.href = "#signin";

    return fetchResponse;
  }

  async runAsync(param) {
    console.log("Starting runAsync...");
    if (!this.actions.length) {
      console.log("No actions to run.");
      return;
    }
    if (this.erreur) delete this.erreur;
    if (!param) param = {};

    let query = window.location.href.split("#")[0];
    query = query.indexOf("?") >= 0 ? query.substring(query.indexOf("?")) : "";

    let p3 = "t" + new Date().getTime();

    const echangeur = this.clone();
    console.log("Cloned echangeur:", echangeur);

    if (echangeur.actions.length) {
      const baseUrl = webDbName + webUrlAgent;
      let url;
      let settings;

      if (echangeur.formData) {
        const formData = echangeur.formData;
        console.log("Echangeur formdata");
        for (var [key, value] of formData.entries()) {
          console.log(key, value);
        }
        delete echangeur.formData;
        formData.append("echangeur", JSON.stringify(echangeur));

        url = baseUrl + "formdata" + "/" + p3 + query;
        settings = {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        };
      } else {
        url = baseUrl + "/" + p3 + query;
        settings = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(echangeur),
        };
      }

      console.log("URL:", url);
      console.log("Settings:", settings);

      let fetchResponse;
      try {
        fetchResponse = await fetch(url, settings);
        console.log("Fetch response status:", fetchResponse.status);
        
        // Vérifier si la réponse est vide
        const responseText = await fetchResponse.text();
        console.log("Fetch response text:", responseText);

        // Re-parsing la réponse textuelle en JSON si elle n'est pas vide
        if (responseText) {
          const donnee = JSON.parse(responseText);
          console.log("Parsed JSON response:", donnee);

          if (donnee && donnee.$outputs) {
            for (var i in donnee.$outputs) {
              this[donnee.$outputs[i]] = donnee[donnee.$outputs[i]];
            }
          } else {
            console.warn("No outputs found in response.");
          }

          if (donnee.erreur) {
            this.erreur = donnee.erreur;
          } else {
            delete this.erreur;
          }

          this.addMessage(donnee.message || "No message provided.");
          if (EchangeurLog) {
            EchangeurLog.shift();
            EchangeurLog.push(this);
          }
        } else {
          console.warn("Response is empty.");
        }
      } catch (fetchError) {
        console.error("Fetch error:", fetchError);
        throw fetchError;
      }
    }
    console.log("runAsync completed.");
    return this;
  }
  // Appel type rest d'un Echangeur qui contient une action unique.
  static async rest(fonction, parametres, doc, d) {
    const echangeur = new Echangeur("rest " + fonction);
    echangeur.set("doc", doc);
    echangeur.addAction(fonction, parametres, "doc", "output", d);
    const v = await echangeur.runAsync();
    if (!v) throw "Echangeur is nothing";
    if (v.erreur) throw v.erreur;
    return v.get("output");
  }
  // Appel type rest d'un Echangeur qui contient une action unique sans appel au modal.
  static async restnomodal(fonction, parametres, doc, d) {
    const echangeur = new Echangeur("rest " + fonction);
    echangeur.set("doc", doc);
    echangeur.addAction(fonction, parametres, "doc", "output", d);
    const v = await echangeur.runAsync({ nomodal: true });
    if (!v) throw "Echangeur is nothing";
    if (v.erreur) throw v.erreur;
    return v.get("output");
  }
}

class EchangeurException {
  constructor(status, message, atraiter, failSilent) {
    this.status = status;
    this.message = message || "Communication error, Please retry ";
    this.atraiter =
      atraiter ||
      function () {
        console.log("EchangeurException rien a traiter");
      };
    this.failSilent = failSilent ? true : false;
  }
  toString() {
    return this.message;
  }
  async atraiter() {
    await this.atraiter();
  }
  isFatal() {
    return this.status && this.status > 3;
  }
}

class UserException extends EchangeurException {}

export { Action, Echangeur, EchangeurException, EchangeurLog, UserException }; // a list of exported variables.
