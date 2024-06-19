import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RAPPORTS } from "../../utils/index";
import { FilePenLine } from "lucide-react";
import Header from "../../components/Navigation/Header";
import { useEchangeur } from "../../utils/providers/EchangeurContext";

export default function RapportsList() {
  const navigate = useNavigate();
  const { echangeur } = useEchangeur();
  const [rapports, setRapports] = useState([]);
  const [error, setError] = useState(null);

  const fetchReports = async () => {
    try {
      const response = await fetch(
        `http://192.168.10.111:3010/echangeur/format=json&time=1718789727400`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setRapports(data);
    } catch (error) {
      console.error("Erreur lors de la requête", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <>
      <Header title="Mes Raports" btnTitle="Rechercher" height="250px">
        <div className="flex items-center justify-between mt-[80px]">
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
            <Link
              className="bg-green-600 border border-green-500 rounded-md text-[12px] text-white py-2 px-2 flex items-center gap-2"
              to="/sell-stock"
            >
              <FilePenLine size={15} />
              Ventes et stock
            </Link>

            <Link
              className="bg-green-600 border border-green-500 rounded-md text-[12px] text-white py-2 px-2 flex items-center gap-2"
              to="/"
            >
              <FilePenLine size={15} />
              Commande en cours
            </Link>
          </div>
        </div>
      </Header>
      <section className="w-full bg-gray-100">
        <div className="bg-white">
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
