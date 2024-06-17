import Card from "../../components/Shared/Card";
import Input from "../../components/FormElements/Input";
import React, { useEffect, useState } from "react";
import { MoveVertical, Plus, X } from "lucide-react";
import { CircularProgress, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import useNotify from "../../utils/hooks/useToast";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button from "../../components/FormElements/Button";
import getNumbersFromLabel from "../../utils/func/GetNumbersFromLabel";

interface Dimension {
  _id: string;
  GDI_TYPEDIM: string;
  GDI_DIMORLI: string;
  GDI_LIBELLE: string;
}

interface FormData {
  LIBELLE: string;
  TYPE: string;
  DIMENSIONS: string[];
}

interface GridCreatePageProps {
  onCreate: (newGridId: string) => void;
  onClose: () => void;
}


export default function GridCreatePage({
  onCreate,
  onClose,
}: GridCreatePageProps) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [dimensions, setDimensions] = useState<Dimension[]>([]);
  const [selectedDimensions, setSelectedDimensions] = useState<Dimension[]>([]);
  const { notifySuccess, notifyError } = useNotify();
  const [type, setType] = useState("");
  const [label, setLabel] = useState("");
  const [choiceValue, setChoiceValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20;
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    LIBELLE: "",
    TYPE: "",
    DIMENSIONS: [],
  });

  const levelOptions = [
    { value: "DI1", label: "Couleur", name: "Couleur" },
    { value: "DI2", label: "Taille", name: "Taille" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_DEV}/api/v1/grid`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const newGridId = data._id;
        setTimeout(() => {
          notifySuccess("Collection crée avec succés !");
          setIsLoading(false);
          onCreate(newGridId);
          onClose();
        }, 1000);
      } else {
        notifyError("Erreur lors de la création");
      }
    } catch (error) {
      console.error("Erreur lors de la requête", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_DEV}/api/v1/dimension/search?GDI_LIBELLE=${searchValue}&GDI_TYPEDIM=${type}&page=${currentPage}&limit=${limit}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setDimensions(data.data);
    } catch (error) {
      console.error("Erreur lors de la requête", error);
    }
  };

  const handleSetType = (e: any) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const selectedOptionLabel = selectedOption.label;
    setType(selectedOption.value);
    setFormData({
      ...formData,
      TYPE: selectedOptionLabel,
    });
  };

  const handleSetLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
    setFormData({
      ...formData,
      LIBELLE: e.target.value,
    });
  };

  const handleDropdownOpen = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setChoiceValue("");
    setDropdownIsOpen(true);
  };

  const handleDropdownClose = (dimension: Dimension) => {
    const existingDimension = selectedDimensions.find(
      (d) => d._id === dimension._id
    );
    if (!existingDimension) {
      setSelectedDimensions([...selectedDimensions, dimension]);
      setFormData({
        ...formData,
        DIMENSIONS: [...formData.DIMENSIONS, dimension.GDI_LIBELLE],
      });
    }
  };

  const handleDragAndDrop = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(selectedDimensions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSelectedDimensions(items);
  };

  const handleDeleteDimension = (dimensionId: string) => {
    setSelectedDimensions(
      selectedDimensions.filter((dimension) => dimension._id !== dimensionId)
    );
  };

  useEffect(() => {
    if (searchValue) {
      handleSearch();
    }
  }, [searchValue, type]);

  return (
    <section className="w-full p-4">
      <form className="mb-[50px]" onSubmit={handleSubmit}>
        <h1 className="text-[32px] font-bold text-gray-800">
          Créer une grille de dimension
        </h1>
        <div>
          <div>
            <Input
              element="input"
              id="LIBELLE"
              label="Libellé de la grille"
              placeholder="Donnez un nom à la grille"
              validators={[]}
              onChange={handleSetLabel}
              create
              required
              gray
            />
          </div>

          <div className="flex-1">
            <Input
              element="select"
              id="TYPE"
              label="Type de dimension"
              placeholder="Choississez un type de dimension"
              validators={[]}
              onChange={handleSetType}
              options={levelOptions}
              create
              required
              gray
            />
          </div>

          <div className="relative flex mt-3 gap-2">
            <div className="relative w-[50%]">
              <Input
                element="input"
                id="DIMENSION"
                label="Ajouter des dimensions"
                placeholder="Choississez vos dimensions"
                validators={[]}
                gray
                create
                onChange={handleDropdownOpen}
                onClick={() => setDropdownIsOpen(true)}
              />
              {choiceValue && (
                <div className="absolute bottom-[3px] bg-orange-400 py-2 px-4 rounded-md">
                  <div
                    className="absolute flex items-center justify-center h-[18px] w-[18px] top-[-2px] right-[-4px] rounded-full bg-red-600 text-white cursor-pointer"
                    onClick={() => setChoiceValue("")}
                  >
                    <X />
                  </div>
                  <p className="text-white font-bold text-sm">{choiceValue}</p>
                </div>
              )}
              {dropdownIsOpen && dimensions && searchValue && (
                <div className="absolute w-[100%] bg-gray-50 z-[20000] py-4 rounded-b-md shadow-md">
                  <div
                    className="h-[30px] flex justify-end cursor-pointer px-3"
                    onClick={() => setDropdownIsOpen(false)}
                  >
                    <div className="h-[30px] w-[30px] flex justify-center items-center bg-orange-500 rounded-full text-white hover:bg-orange-400">
                      <X />
                    </div>
                  </div>
                  {dimensions.map((dimension, i) => (
                    <ul key={i}>
                      <li
                        className={`cursor-pointer py-1 ${
                          selectedDimensions.includes(dimension)
                            ? "bg-orange-400 text-white font-bold hover:bg-orange-300"
                            : ""
                        } hover:bg-gray-200 text-lg px-4 py-2 border-b`}
                        onClick={() => handleDropdownClose(dimension)}
                      >
                        {dimension.GDI_LIBELLE}
                      </li>
                    </ul>
                  ))}
                </div>
              )}
            </div>
            {/* {selectedDimensions.length > 1 && (
              <div className="absolute right-[-50px] top-[50%] translate-y-[-50%] text-orange-400">
                <MoveVertical size={40} />
              </div>
            )} */}
            <div className="w-[50%] border rounded-sm p-1">
              {selectedDimensions && (
                <DragDropContext onDragEnd={handleDragAndDrop}>
                  <Droppable droppableId="selectedDimensions">
                    {(provided) => (
                      <ul
                        className="flex flex-wrap gap-1"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {selectedDimensions.map((dimension, index) => (
                          <Draggable
                            key={dimension._id}
                            draggableId={dimension._id}
                            index={index}
                          >
                            {(provided) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div
                                  className="flex items-center justify-center relative w-[40px] h-[40px] bg-orange-300 text-white p-3 rounded-full font-bold cursor-pointer"
                                  onClick={() =>
                                    handleDeleteDimension(dimension._id)
                                  }
                                >
                                  {getNumbersFromLabel(dimension.GDI_LIBELLE)}
                                </div>
                              </li>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </DragDropContext>
              )}
            </div>
          </div>
        </div>
        {!isLoading ? (
          <div className="mt-4 flex items-center gap-2">
            <Button size="small" cancel type="button">
              Annuler
            </Button>
            <Button size="small" blue type="submit">
              Enregister ma grille
            </Button>
          </div>
        ) : (
          <div className="mt-3">
            <CircularProgress />
          </div>
        )}
      </form>
    </section>
  );
}
