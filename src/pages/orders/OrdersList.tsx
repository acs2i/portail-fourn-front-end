import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ORDERS, ORDERS_LINKS, RAPPORTS } from "../../utils/index";
import { FilePenLine } from "lucide-react";
import Header from "../../components/Navigation/Header";

export default function OrderList() {
  const navigate = useNavigate();
  const [page, setPage] = useState("todo");

  return (
    <>
      <Header title="Mes Commandes" height="300px">
        <div className="h-[70px] bg-gray-100 border border-gray-300 rounded-md mt-[50px] p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <label className="text-sm font-bold mb-1 text-gray-700">
                Filtre :
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
                Utilisateur :
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
            <Link to="/proposal_order" className="bg-transparent border border-green-500 rounded-md text-[12px] text-green-600 py-1 px-2 flex items-center gap-2 hover:bg-green-500 hover:text-white">
              <FilePenLine size={15} />
              Proposition commande
            </Link>

            <Link to="/cadencement" className="bg-transparent border border-green-500 rounded-md text-[12px] text-green-600 py-1 px-2 flex items-center gap-2 hover:bg-green-500 hover:text-white">
              <FilePenLine size={15} />
              Précommande candencement
            </Link>
          </div>
        </div>
      </Header>

      <section className="w-full bg-gray-100">
        <div className="flex items-center bg-white h-[60px]">
          {ORDERS_LINKS.map((link, i) => (
            <button
              key={i}
              className={`text-sm font-[600] w-[100px] h-full ${
                page === link.page
                  ? "text-green-600 border-t-2 border-l-2 border-r-2 border-green-600 bg-white border-b-2 border-b-white -mb-[1px] relative z-10 rounded-t-md"
                  : "text-gray-600 border-t-2 border-transparent"
              }`}
              onClick={() => setPage(link.page)}
            >
              {link.name}
            </button>
          ))}
        </div>
        <div className="bg-white border-t-[2px] border-green-600">
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
                {ORDERS.map((order, i) => (
                  <tr
                    key={i}
                    className="bg-white cursor-pointer hover:bg-slate-200 capitalize text-[12px] text-gray-800 even:bg-gray-100 whitespace-nowrap border"
                    onClick={() => navigate(`/`)}
                  >
                    <td className="px-6 py-2">{order.supplier}</td>
                    <td className="px-6 py-2">{order.type}</td>
                    <td className="px-6 py-2">{order.label}</td>
                    <td className="px-6 py-2">{order.creationDate}</td>
                    <td className="px-6 py-2">{order.status}</td>
                    <td className="px-6 py-2">{order.for}</td>
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
