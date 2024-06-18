import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fr } from "date-fns/locale";
import { Calendar, Plus, Trash2, XCircle } from "lucide-react";
import Header from "../../components/Navigation/Header";
import Button from "../../components/FormElements/Button";

// Enregistrer la locale française
registerLocale("fr", fr);

// Définir la locale française par défaut
setDefaultLocale("fr");

export default function Cadencement() {
  const [dates, setDates] = useState<Date[]>([new Date()]);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleAddDate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Empêche la soumission du formulaire
    setDates([...dates, new Date()]);
  };

  const handleDateChange = (index: number, date: Date) => {
    const newDates = [...dates];
    newDates[index] = date;
    setDates(newDates);
  };

  const handleRemoveDate = (index: number) => {
    const newDates = dates.filter((_, i) => i !== index);
    setDates(newDates);
  };

  return (
    <>
      <Header
        title="Précommande cadencement"
        btnTitle="Rechercher"
        height="300px"
      ></Header>
      <section className="w-full bg-white h-screen">
        <div className="p-3">
          <div className="w-full relative">
            <form className="w-[50%] mx-auto flex flex-col gap-4 justify-center mt-5">
              <div className="flex items-center justify-end gap-3 mb-5">
                <Button size="small" cancel>
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
              </div>
              <div className="flex items-center gap-4 ">
                <label className="text-sm font-bold text-gray-700 mb-0 w-[200px]">
                  Référence commande :
                </label>
                <input className="bg-gray-50 w-[450px] border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block p-2" />
              </div>
              <div className="flex items-center gap-4 ">
                <label className="text-sm font-bold text-gray-700 mb-0 w-[200px]">
                  Marques :
                </label>
                <select
                  name="brand"
                  className="bg-gray-50 w-[450px] border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block p-2"
                >
                  <option value="">Toutes</option>
                </select>
              </div>
              <div className="flex items-center gap-4 ">
                <label className="text-sm font-bold text-gray-700 mb-0 w-[200px]">
                  Exclusions :
                </label>
                <select
                  name="brand"
                  className="bg-gray-50 w-[450px] border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block p-2"
                >
                  <option value="">Toutes</option>
                </select>
              </div>
              <div className="flex items-center gap-4 ">
                <label className="text-sm font-bold text-gray-700 mb-0 w-[200px]">
                  Collection :
                </label>
                <select
                  name="brand"
                  className="bg-gray-50 w-[450px] border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block p-2"
                >
                  <option value="">Toutes</option>
                </select>
              </div>
              <div className="flex items-center gap-4 ">
                <label className="text-sm font-bold text-gray-700 mb-0 w-[200px]">
                  Familles :
                </label>
                <select
                  name="brand"
                  className="bg-gray-50 w-[450px] border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block p-2"
                >
                  <option value="">Toutes</option>
                </select>
              </div>
              <div className="flex items-center gap-4 ">
                <label className="text-sm font-bold text-gray-700 mb-0 w-[200px]">
                  Sous-famille :
                </label>
                <select
                  name="brand"
                  className="bg-gray-50 w-[450px] border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block p-2"
                >
                  <option value="">Toutes</option>
                </select>
              </div>
              <div className="flex items-center gap-4 ">
                <label className="text-sm font-bold text-gray-700 mb-0 w-[200px]">
                  Cadencement :
                </label>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    {dates.map((date, index) => (
                      <div
                        key={index}
                        className="relative flex items-center gap-2"
                      >
                        <div className="border border-gray-200 p-1 rounded-md flex items-center">
                          <DatePicker
                            selected={date}
                            onChange={(newDate) =>
                              handleDateChange(index, newDate!)
                            }
                            locale="fr"
                            dateFormat="P"
                            className="focus:outline-none focus:border-green-500"
                          />
                          <Calendar size={18} />
                        </div>
                        {index > 0 && (
                          <button
                            onClick={() => handleRemoveDate(index)}
                            className="absolute right-[-25px] text-red-600"
                            type="button"
                          >
                            <Trash2 size={15} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <div>
                    <button
                      onClick={handleAddDate}
                      className="border border-gray-500 bg-gray-200 py-1 px-1 text-gray-600 rounded-full mt-1"
                      type="button"
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                </div>
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
                      <button
                        className="border border-gray-500 p-1 rounded-md text-[12px]"
                        type="button"
                      >
                        1 semaine
                      </button>
                      <button
                        className="border border-gray-500 p-1 rounded-md text-[12px]"
                        type="button"
                      >
                        2 semaines
                      </button>
                      <button
                        className="border border-gray-500 p-1 rounded-md text-[12px]"
                        type="button"
                      >
                        1 mois
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
