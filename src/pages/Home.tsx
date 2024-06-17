import React, { useState, useEffect } from "react";
import Card from "../components/Shared/Card";
import { Factory, FilePenLine, FolderOpen } from "lucide-react";
import Button from "../components/FormElements/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="w-full p-8 flex bg-gray-100 h-screen">
      <div className="flex gap-7">
        <Card title="Fournisseur">
          <div className="flex flex-col h-[200px] justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center">
                <Factory size={80} />
              </div>
              <p>UIO36655</p>
            </div>
            <div className="flex items-end">
              <Link
                className="bg-green-600 w-full text-white py-1 rounded-md text-center hover:bg-green-400"
                to="/change-supplier"
              >
                Changer de fournisseur
              </Link>
            </div>
          </div>
        </Card>
        <Card title="Rapports">
          <div className="flex flex-col h-[200px] justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center">
                <FolderOpen size={80} />
              </div>
              <p>Consulter vos rapports</p>
            </div>
            <div className="flex items-end">
              <Link
                className="bg-green-600 w-full text-white py-1 rounded-md text-center hover:bg-green-400"
                to="/rapports"
              >
                Rapports
              </Link>
            </div>
          </div>
        </Card>
        <Card title="Commandes">
          <div className="flex flex-col h-[200px] justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center">
                <FilePenLine size={80} />
              </div>
              <p>Consulter vos commandes</p>
            </div>
            <div className="flex items-end">
              <Link
                className="bg-green-600 w-full text-white py-1 rounded-md text-center hover:bg-green-400"
                to="/orders"
              >
                Commandes
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
