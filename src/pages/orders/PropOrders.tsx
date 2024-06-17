import React, { useState } from "react";
import { RAPPORTS, SUPPLIERS } from "../../utils/index";
import Header from "../../components/Navigation/Header";
import Input from "../../components/FormElements/Input";
import { Link } from "react-router-dom";

export default function PropOrders() {
  return (
    <>
      <Header
        title="Proposition fournisseur"
        btnTitle="Rechercher"
        height="300px"
      >
      </Header>
      <section className="w-full bg-white h-screen">
        <div className="p-3 border-t-[2px] border-green-600">
          <div className="w-full relative">
            <form className="w-[50%] mx-auto flex flex-col gap-4 justify-center mt-5">
              <div className="flex items-center gap-4">
                <label className="text-sm font-bold text-gray-700 mb-0 w-[200px]">
                  Fournisseur :
                </label>
                <span className="text-sm text-gray-700">UIO36655</span>
                <Link to="/change-supplier" className="text-sm text-blue-500 hover:text-blue-400">Changer Fournisseur</Link>
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
                  Sous-familles :
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
                  Date de vente début :
                </label>
                <div className="flex items-center gap-1">
                    <button className="border border-green-500 w-[150px] rounded-md">10-juin-2024</button>
                    <button className="border border-green-500 w-[100px] rounded-md">1 semaine</button>
                    <button className="border border-green-500 w-[100px] rounded-md">2 semaines</button>
                    <button className="border border-green-500 w-[100px] rounded-md">1 mois</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
