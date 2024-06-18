import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fr } from "date-fns/locale";
import Header from "../../components/Navigation/Header";
import { Link } from "react-router-dom";
import Button from "../../components/FormElements/Button";

// Enregistrer la locale française
registerLocale("fr", fr);

// Définir la locale française par défaut
setDefaultLocale("fr");



export default function SellStock() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(startDate)
  };

  return (
    <>
      <Header
        title="Vente et stock"
        btnTitle="Rechercher"
        height="300px"
      ></Header>
      <section className="w-full bg-white h-screen">
        <div className="p-3">
          <div className="w-full relative">
            <form className="w-[50%] mx-auto flex flex-col gap-4 justify-center mt-5" onSubmit={handleSubmit}>
              <div className="flex items-center justify-end gap-3 mb-5">
                <Button size="small" cancel type="button">
                  Annuler
                </Button>
                <Button size="small" green>
                  Valider
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <label className="text-sm font-bold text-gray-700 mb-0 w-[200px]">
                  Fournisseur :
                </label>
                <span className="text-sm text-gray-700">UIO36655</span>
                <Link
                  to="/change-supplier"
                  className="text-sm text-blue-500 hover:text-blue-400"
                >
                  Changer Fournisseur
                </Link>
              </div>
              <div className="flex items-center gap-4 ">
                <label className="text-sm font-bold text-gray-700 mb-0 w-[200px]">
                  Date de vente début :
                </label>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="border border-gray-200 p-1 rounded-md flex items-center">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          locale="fr"
                          dateFormat="P"
                          className="focus:outline-none focus:border-green-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="scales" name="scales" />
                <label>Me faire parvenir par mail</label>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
