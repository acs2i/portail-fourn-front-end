import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fr } from "date-fns/locale";
import Header from "../../components/Navigation/Header";
import { Link } from "react-router-dom";



// Enregistrer la locale française
registerLocale("fr", fr);

// Définir la locale française par défaut
setDefaultLocale("fr");

type Family = {
  _id: string;
  YX_TYPE: string;
  YX_CODE: string;
  YX_LIBELLE: string;
};

type Brand = {
  _id: string;
  YX_CODE: string;
  YX_LIBELLE: string;
};

type FamilyOption = {
  value: string;
  label: string;
};

type BrandOption = {
  value: string;
  label: string;
};

export default function PropOrders() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [optionsFamily, setOptionsFamily] = useState<FamilyOption[]>([]);
  const [optionsSubFamily, setOptionsSubFamily] = useState<FamilyOption[]>([]);
  const [optionsBrand, setOptionsBrand] = useState<BrandOption[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20;

  const filterValidOptions = (options: FamilyOption[]) => {
    return options.filter(option => option.value && option.label);
  };


  const fetchBrand = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_DEV}/api/v1/brand?page=${currentPage}&limit=${limit}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
    
      const optionsBrand = data.data?.map((brand: Brand) => ({
        value: brand.YX_LIBELLE,
        label: brand.YX_LIBELLE,
      }));

      setOptionsBrand(optionsBrand);
    } catch (error) {
      console.error("Erreur lors de la requête", error);
    }
  };
  
  const fetchFamily = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_DEV}/api/v1/family/search?YX_TYPE=LA1&page=${currentPage}&limit=${limit}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      const optionsFamily = data.data?.map((family: Family) => ({
        value: family.YX_LIBELLE,
        label: family.YX_LIBELLE,
      }));

      setOptionsFamily(optionsFamily);
    } catch (error) {
      console.error("Erreur lors de la requête", error);
    }
  };

  const fetchSubFamily = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_DEV}/api/v1/family/search?YX_TYPE=LA2&page=${currentPage}&limit=${limit}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      const optionsSubFamily = data.data?.map((family: Family) => ({
        value: family.YX_LIBELLE,
        label: family.YX_LIBELLE,
      }));

      setOptionsSubFamily(filterValidOptions(optionsSubFamily));
    } catch (error) {
      console.error("Erreur lors de la requête", error);
    }
  };

  useEffect(() => {
    fetchFamily();
    fetchSubFamily();
    fetchBrand();
  }, []);



  return (
    <>
      <Header
        title="Proposition fournisseur"
        btnTitle="Rechercher"
        height="300px"
      ></Header>
      <section className="w-full bg-white h-screen">
        <div className="p-3">
          <div className="w-full relative">
            <form className="w-[50%] mx-auto flex flex-col gap-4 justify-center mt-5">
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
                  {optionsBrand.map((option) => (
                    <option value="">{option.label}</option>
                  ))}
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
                  {optionsFamily.map((option) => (
                    <option value="">{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-4 ">
                <label className="text-sm font-bold text-gray-700 mb-0 w-[200px]">
                  Sous-familles :
                </label>
                <select
                  name="brand"
                  className="bg-gray-50 w-[450px] border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block p-2"
                >
                  {optionsSubFamily.map((option) => (
                    <option value="">{option.label}</option>
                  ))}
                </select>
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
