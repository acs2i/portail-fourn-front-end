import Card from "../../components/Shared/Card";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../utils/hooks/usefetch";
import Input from "../../components/FormElements/Input";
import Button from "../../components/FormElements/Button";
import { CircularProgress, Divider } from "@mui/material";
import useNotify from "../../utils/hooks/useToast";
import Modal from "../../components/Shared/Modal";
import { ChevronLeft, RotateCcw, X } from "lucide-react";

interface Brand {
  _id: string;
  YX_CODE: any;
  YX_LIBELLE: any;
}

interface BrandUpdatePageProps {
  selectedBrand: Brand;
  onUpdate: () => void;
  onClose: () => void;
}

interface FormData {
  YX_CODE: string;
  YX_LIBELLE: string;
}

export default function BranchUpdatePage({
  selectedBrand,
  onUpdate,
  onClose,
}: BrandUpdatePageProps) {
  const id = selectedBrand._id;
  const [brandUpdate, setBrandUpdate] = useState<Brand | null>(null);
  const { notifySuccess, notifyError } = useNotify();
  const [isModify, setIsModify] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data: brand } = useFetch<Brand>(
    `${process.env.REACT_APP_URL_DEV}/api/v1/brand/${id}`
  );
  const [libelle, setLibelle] = useState("");
  const [code, setCode] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    YX_CODE: "",
    YX_LIBELLE: "",
  });

  const handleLibelleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLibelle(e.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      YX_LIBELLE: e.target.value,
    }));
  };

  useEffect(() => {
    if (brand) {
      setLibelle(brand.YX_LIBELLE);
      setCode(brand.YX_CODE);
      setFormData({
        YX_LIBELLE: brand.YX_LIBELLE,
        YX_CODE: brand.YX_CODE,
      });
    }
  }, [brand]);

  useEffect(() => {
    if (selectedBrand) {
      setBrandUpdate(selectedBrand);
    }
  }, [selectedBrand]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_DEV}/api/v1/brand/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setTimeout(() => {
          notifySuccess("Brand modifiée avec succès !");
          setIsLoading(false);
          onUpdate();
          onClose();
        }, 1000);
      } else {
        notifyError("Erreur lors de la modif !");
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <section className="w-full p-4">
      <Modal
        show={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onClose={() => setIsModalOpen(false)}
        header="Confirmation de modification de la collection"
        onSubmit={handleSubmit}
        icon="?"
      >
        <div className="px-7 mb-5">
          <p className="text-gray-800 text-xl">
            Voulez-vous vraiment appliquer ces modifications ?
          </p>
        </div>
        <Divider />
        {!isLoading ? (
          <div className="flex justify-end mt-7 px-7 gap-2">
            <Button
              size="small"
              danger
              type="button"
              onClick={() => setIsModalOpen(false)}
            >
              Non
            </Button>
            <Button size="small" blue type="submit">
              Oui
            </Button>
          </div>
        ) : (
          <div className="flex justify-end mt-7 px-7 gap-2">
            <CircularProgress />
          </div>
        )}
      </Modal>

      <form className="mb-[50px]">
        <div className="flex items-center justify-between">
          <div onClick={onClose} className="cursor-pointer">
            <ChevronLeft />
          </div>
          <h1 className="text-[20px] font-bold text-gray-800">
            Code de la <span className="font-bold">marque :</span>{" "}
            {brand?.YX_CODE}
          </h1>
          {!isModify && (
            <div onClick={() => setIsModify(true)} className="cursor-pointer">
              <span className="text-[12px] text-blue-500">Modifier</span>
            </div>
          )}
        </div>
        <div className="mt-3">
          <Divider />
        </div>
        <div className="mt-5 flex flex-col justify-between">
          <div className="flex flex-col">
            {isModify ? (
              <div>
                <Input
                  element="input"
                  id="label"
                  type="text"
                  placeholder="Modifier le libellé"
                  value={libelle}
                  label="Libellé"
                  validators={[]}
                  create
                  onChange={handleLibelleChange}
                  gray
                />
              </div>
            ) : (
              <div>
                <Input
                  element="input"
                  id="label"
                  type="text"
                  placeholder="Modifier le libellé"
                  value={libelle}
                  label="Libellé"
                  validators={[]}
                  disabled
                  create
                  onChange={handleLibelleChange}
                  gray
                />
              </div>
            )}
          </div>
          {isModify && (
            <div className="w-full mt-2">
              <div className="flex items-center gap-2">
                <Button
                  size="small"
                  cancel
                  type="button"
                  onClick={() => setIsModify(false)}
                >
                  Annuler
                </Button>
                <Button
                  size="small"
                  blue
                  onClick={() => setIsModalOpen(true)}
                  type="button"
                >
                  Modifier la marque
                </Button>
              </div>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
