import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RAPPORTS, SUPPLIERS } from "../../utils/index";
import { FilePenLine } from "lucide-react";
import Header from "../../components/Navigation/Header";
import Input from "../../components/FormElements/Input";

export default function ChangeSupplier() {
  const navigate = useNavigate();

  return (
    <>
      <Header
        title="Changer de fournisseur"
        btnTitle="Rechercher"
        height="300px"
      ></Header>
      <section className="w-full bg-white h-screen">
        <div className="p-3 border-t-[2px] border-green-600">
          <div className="w-full relative">
            <form className="w-[50%] mx-auto flex flex-col gap-4 justify-center mt-5">
              <div className="flex items-center gap-4">
                <label className="text-sm font-bold text-gray-700 mb-0 w-[200px]">
                  Fournisseur actuel :
                </label>
                <span className="text-sm text-gray-700">UIO36655</span>
              </div>
              <div className="flex items-center gap-4 ">
                <label className="text-sm font-bold text-gray-700 mb-0 w-[200px]">
                  Changer de fournisseur :
                </label>
                <select
                  name="pets"
                  id="pet-select"
                  className="bg-gray-50 w-[400px] border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block p-2"
                >
                  {SUPPLIERS.map((supplier, index) => (
                    <option key={index} value={supplier.code}>
                      {supplier.code}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
