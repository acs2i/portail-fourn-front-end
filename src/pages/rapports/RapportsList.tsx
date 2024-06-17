import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RAPPORTS } from "../../utils/index";
import { FilePenLine } from "lucide-react";
import Header from "../../components/Navigation/Header";

export default function RapportsList() {
  const navigate = useNavigate();

  return (
    <>
      <Header title="Mes Raports" btnTitle="Rechercher" height="300px">
        <div className="h-[70px] bg-gray-100 border border-gray-300 rounded-md mt-[50px] p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <label className="text-sm font-bold mb-1 text-gray-700">
                Code :
              </label>
              <select
                name="pets"
                id="rapports"
                className="block px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Toutes</option>
                <option value="stock">Ventes et stock</option>
                <option value="order">Commandes en cours</option>
                <option value="preref">Préref</option>
                <option value="infos">Infos fournisseurs</option>
                <option value="import">Import inf fournisseurs</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-bold mb-1 text-gray-700">
                Status :
              </label>
              <select
                name="pets"
                id="rapports"
                className="block px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">En cours</option>
                <option value="stock">Archivées</option>
                <option value="order">Supprimées</option>
                <option value="preref">Toutes</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[13px]">Nouvelle requête : </p>
            <button className="bg-transparent border border-green-500 rounded-md text-[12px] text-green-600 py-1 px-2 flex items-center gap-2">
              <FilePenLine size={15} />
              Ventes et stock
            </button>

            <button className="bg-transparent border border-green-500 rounded-md text-[12px] text-green-600 py-1 px-2 flex items-center gap-2">
              <FilePenLine size={15} />
              Commande en cours
            </button>
          </div>
        </div>
      </Header>
      <section className="w-full bg-gray-100">
        <div className="bg-white p-3 border-t-[2px] border-green-600">
          <div className="w-full relative bg-white">
            <table className="w-full text-left border-collapse">
              <thead className="border-y-[1px] border-gray-200 text-md font-[800] text-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-2">
                    Fournisseur
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Libellé
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Date de création
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Utilisateur
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {RAPPORTS.map((rapport, i) => (
                  <tr
                    key={i}
                    className="bg-white cursor-pointer hover:bg-slate-200 capitalize text-[12px] text-gray-800 even:bg-gray-100 whitespace-nowrap border"
                    onClick={() => navigate(`/`)}
                  >
                    <td className="px-6 py-2">{rapport.supplier}</td>
                    <td className="px-6 py-2">{rapport.type}</td>
                    <td className="px-6 py-2">{rapport.label}</td>
                    <td className="px-6 py-2">{rapport.creationDate}</td>
                    <td className="px-6 py-2">{rapport.user}</td>
                    <td className="px-6 py-2">{rapport.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
