import {
  Link,
  LinkCard,
  Suppliers,
  Notifications,
  Graph,
  MarkerInfo,
  Product,
  Card,
  Rapports,
  Orders,
} from "@/type";
import {
  CalendarDays,
  TriangleAlert,
  ListOrdered,
  Ruler,
  Grid3X3,
  Shirt,
  Captions,
  Settings2,
  Factory,
  SquarePen,
  User,
  Home,
  FilePenLine,
  FolderOpen,
} from "lucide-react";

export const LINKS: Link[] = [
  {
    linkCategory: [
      {
        name: "Apps",
        linksGroup: [
          {
            name: "Accueil",
            link: "/",
            linksGroup: [],
            icon: Home,
          },
          {
            name: "Fournisseur",
            link: "/change-supplier",
            linksGroup: [],
            icon: Factory,
          },
          {
            name: "Rapports",
            link: "/rapports",
            linksGroup: [],
            icon: FolderOpen,
          },
          {
            name: "Commandes",
            linksGroup: [
              {
                name: "Todo",
                link: "/orders-todo",
              },
              {
                name: "En cours",
                link: "/orders-progress",
              },
              {
                name: "Finalisés",
                link: "/orders-done",
              },
            ],
            icon: FilePenLine,
          },
        ],
      },
      {
        name: "Admin",
        linksGroup: [
          {
            name: "Produits créés",
            link: "/draft",
            group: [],
            icon: SquarePen,
          },
          {
            name: "Utilisateurs",
            linksGroup: [
              {
                name: "Liste des utilisateurs",
                link: "/admin",
              },
              {
                name: "Créer un groupe",
                link: "/admin/create-group",
              },
              {
                name: "Groupes créés",
                link: "/admin/created-group",
              },
            ],
            icon: User,
          },
          {
            name: "Errors",
            linksGroup: [],
            icon: TriangleAlert,
          },
        ],
      },
    ],
  },
];


export const RAPPORTS: Rapports[] = [
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 10:25", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "pre", label: "Préréf", creationDate: "14-mai-2024 10:23", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "pre", label: "Préréf", creationDate: "14-mai-2024 10:22", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ves", label: "VENTES A DATE PAR MAGASIN ( 07-mai-2024 au 14-mai-2024 )", creationDate: "14-mai-2024 10:22", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 10:22", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 10:22", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 10:14", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 10:13", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 10:13", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 10:13", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 09:56", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ves", label: "VENTES A DATE PAR MAGASIN ( 07-mai-2024 au 14-mai-2024 )", creationDate: "14-mai-2024 09:56", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "13-mai-2024 18:04", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "13-mai-2024 17:44", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "13-mai-2024 17:44", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ves", label: "VENTES A DATE PAR MAGASIN ( 06-mai-2024 au 13-mai-2024 )", creationDate: "13-mai-2024 17:14", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "13-mai-2024 17:11", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ves", label: "VENTES A DATE PAR MAGASIN ( 06-mai-2024 au 13-mai-2024 )", creationDate: "13-mai-2024 17:09", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ves", label: "VENTES A DATE PAR MAGASIN ( 01-mai-2024 au 07-mai-2024 )", creationDate: "07-mai-2024 18:17", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ves", label: "VENTES A DATE PAR MAGASIN ( 30-avr-2024 au 07-mai-2024 )", creationDate: "07-mai-2024 16:25", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ves", label: "VENTES ET STOCKS PAR MAGASIN ( 03-jul-2023 au 10-jul-2023 )", creationDate: "10-jul-2023 11:41", user: "pp", status: 0 },
  { supplier: "0464 MILLET", type: "ves", label: "VENTES ET STOCKS PAR MAGASIN ( 28-fev-2023 au 07-mar-2023 )", creationDate: "07-mar-2023 16:01", user: "pp", status: 0 },
  { supplier: "0017 SOLITE", type: "ves", label: "VENTES ET STOCKS PAR MAGASIN ( 31-jan-2023 au 07-fev-2023 )", creationDate: "07-fev-2023 15:16", user: "pp", status: 0 },
  { supplier: "0108 TREESCO", type: "ves", label: "VENTES ET STOCKS PAR MAGASIN ( 31-jan-2023 au 07-fev-2023 )", creationDate: "07-fev-2023 15:14", user: "pp", status: 0 },
  { supplier: "0108 TREESCO", type: "ves", label: "VENTES ET STOCKS PAR MAGASIN ( 26-jan-2023 au 02-fev-2023 )", creationDate: "02-fev-2023 17:30", user: "pp", status: 0 },
  { supplier: "0646 NIC IMPEX", type: "ves", label: "VENTES ET STOCKS PAR MAGASIN ( 18-jan-2023 au 25-jan-2023 )", creationDate: "25-jan-2023 09:31", user: "pp", status: 0 },
  { supplier: "0646 NIC IMPEX", type: "ves", label: "VENTES ET STOCKS PAR MAGASIN ( 17-jan-2023 au 24-jan-2023 )", creationDate: "24-jan-2023 16:34", user: "pp", status: 0 },
  { supplier: "null null", type: "sai", label: "Saisie pré-référencement", creationDate: "20-jan-2023 10:09", user: "pp", status: 0 },
  { supplier: "0646 NIC IMPEX", type: "pre", label: "Préréf", creationDate: "20-jan-2023 10:09", user: "pp", status: 0 },
  { supplier: "impInf", type: "sai", label: "Import Infos fournisseurs obligatoires", creationDate: "20-jan-2023 10:04", user: "pp", status: 0 },
  { supplier: "0646 NIC IMPEX", type: "inf", label: "Infos fournisseurs obligatoires", creationDate: "20-jan-2023 10:02", user: "pp", status: 0 },
  { supplier: "0646 NIC IMPEX", type: "pre", label: "Préréf", creationDate: "20-jan-2023 10:01", user: "pp", status: 0 },
  { supplier: "impInf", type: "sai", label: "Import Infos fournisseurs obligatoires", creationDate: "10-nov-2022 15:27", user: "pp", status: 0 },
  { supplier: "0646 NIC IMPEX", type: "inf", label: "Infos fournisseurs obligatoires", creationDate: "10-nov-2022 15:27", user: "pp", status: 0 },
  { supplier: "0122 SPORTPULSION", type: "ecf", label: "COMMANDE EN COURS", creationDate: "19-jul-2022 18:02", user: "pp", status: 0 },
  { supplier: "0243 AMATEIS", type: "inf", label: "Infos fournisseurs obligatoires", creationDate: "30-jun-2022 11:13", user: "pp", status: 0 },
  { supplier: "0696 AMWEAR", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-fev-2022 13:02", user: "pp", status: 0 },
  { supplier: "0040 TRANGOWORLD", type: "ecf", label: "COMMANDE EN COURS", creationDate: "15-jan-2021 11:46", user: "pp", status: 0 },
  { supplier: "0040 TRANGOWORLD", type: "ecf", label: "COMMANDE EN COURS", creationDate: "15-jan-2021 11:38", user: "pp", status: 0 },
  { supplier: "0040 TRANGOWORLD", type: "ecf", label: "COMMANDE EN COURS", creationDate: "17-sep-2020 11:54", user: "pp", status: 0 },
  { supplier: "0040 TRANGOWORLD", type: "ves", label: "VENTES ET STOCKS PAR MAGASIN ( 21-mar-2020 au 17-sep-2020 )", creationDate: "17-sep-2020 11:53", user: "pp", status: 0 },
  { supplier: "0040 TRANGOWORLD", type: "ecf", label: "COMMANDE EN COURS", creationDate: "17-sep-2020 11:04", user: "pp", status: 0 },
  { supplier: "0447 PLASTIMO", type: "ecf", label: "COMMANDE EN COURS", creationDate: "17-sep-2020 11:03", user: "pp", status: 0 },
  { supplier: "0447 PLASTIMO", type: "ecf", label: "COMMANDE EN COURS", creationDate: "23-jul-2020 12:09", user: "pp", status: 0 },
  { supplier: "0447 PLASTIMO", type: "ecf", label: "COMMANDE EN COURS", creationDate: "23-jul-2020 12:03", user: "pp", status: 0 },
  { supplier: "0447 PLASTIMO", type: "ecf", label: "COMMANDE EN COURS", creationDate: "23-jul-2020 12:00", user: "pp", status: 0 },
  { supplier: "0447 PLASTIMO", type: "ecf", label: "COMMANDE EN COURS", creationDate: "23-jul-2020 10:25", user: "pp", status: 0 },
  { supplier: "0116 LABONAL", type: "ecf", label: "COMMANDE EN COURS", creationDate: "12-mar-2020 12:34", user: "pp", status: 0 },
  { supplier: "0116 LABONAL", type: "ves", label: "VENTES ET STOCKS PAR MAGASIN ( 05-mar-2020 au 12-mar-2020 )", creationDate: "12-mar-2020 12:33", user: "pp", status: 0 },
  { supplier: "0116 LABONAL", type: "ves", label: "VENTES ET STOCKS PAR MAGASIN ( 05-mar-2020 au 12-mar-2020 )", creationDate: "12-mar-2020 12:30", user: "pp", status: 0 }
];

export const ORDERS: Orders[] = [
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 10:25", status: 0, for: "martin" },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 10:25", status: 0, for: "martin" },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 10:25", status: 0, for: "martin" },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 10:25", status: 0, for: "martin" },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 10:25", status: 0, for: "martin" },
  { supplier: "0464 MILLET", type: "ecf", label: "COMMANDE EN COURS", creationDate: "14-mai-2024 10:25", status: 0, for: "martin" },

];



export const SUPPLIERS: Suppliers[] = [
  {
    code: "ERCFGJ89",
    name: "Michel",
    arobase: "67GGGVV",
  },
  {
    code: "ERCF546",
    name: "Jean",
    arobase: "67GGIPP",
  },
  {
    code: "ERTYJNNJ89",
    name: "Jean pourpre",
    arobase: "674567",
  },
  {
    code: "ERCFGJ89",
    name: "Michelle la chienne",
    arobase: "67G67899",
  },
];

export const ORDERS_LINKS: LinkCard[] = [
  {
    name: "Todo",
    page: "todo",
  },
  {
    name: "En cours",
    page: "progress",
  },
  {
    name: "Finalisés",
    page: "done",
  },
];

export const LINKCARD_EDIT: LinkCard[] = [
  {
    name: "Ajouter un produit",
    page: "addProduct",
  },
  {
    name: "Ajouter une famille",
    page: "addFamilly",
  },
  {
    name: "Ajouter une marque",
    page: "addBrand",
  },
  {
    name: "Ajouter une collection",
    page: "addCollection",
  },
];

export const LINKCARD_PRODUCT: LinkCard[] = [
  {
    name: "Identification",
    page: "general",
  },
  {
    name: "Caractéristiques du produit",
    page: "details",
  },
  {
    name: "Unité de vente consommateur",
    page: "unit",
  },
];

export const LINKCARD_SEARCH: LinkCard[] = [
  {
    name: "Standards",
    page: "standard",
  },
  {
    name: "Compléments",
    page: "complement",
  },
  {
    name: "Caractéristiques",
    page: "caracteristiques",
  },
  {
    name: "Dimensions",
    page: "dimension",
  },
];

export const NOTIF: Notifications[] = [
  {
    user: "John Doe",
    message: "La création de produit a été validée",
    date: "21/05/2024",
  },
  {
    user: "Jane Da",
    message: "La création de produit a été validée",
    date: "21/05/2024",
  },
  {
    user: "Michel Jambon",
    message: "La création de produit a été validée",
    date: "21/05/2024",
  },
  {
    user: "Pré-ref",
    message: "Vous avez des produits en cours de création",
    date: "21/05/2024",
  },
];

export const MESSAGES: Notifications[] = [
  {
    user: "John Doe",
    message: "Il y a un probleme dans le produit que vous avez enregistrée",
    date: "21/05/2024",
  },
  {
    user: "Jane Da",
    message: "njehfjehdefefffff",
    date: "21/05/2024",
  },
  {
    user: "Michel Jambon",
    message: "fjehfefhjehieuieui",
    date: "21/05/2024",
  },
  {
    user: "Pré-ref",
    message: "jhhghttrtrdrrs",
    date: "21/05/2024",
  },
  {
    user: "Pré-ref",
    message: "jhhghttrtrdrrs",
    date: "21/05/2024",
  },
];

export const PRODUCTS: Product[] = [
  {
    code: "678900",
    name: "SAC A DOS ALPINISME MIXT 25 + 5",
    brand: "Ma marque",
    family: "Matériel de montagne",
    subFamily: "Montagne",
    supplier: "Millet",
    productImg:
      "https://www.auvieuxcampeur.fr/media/catalog/product/cache/f83a0334dfee85ff9d02a56cf16dc6c2/8/0/804646122_263.jpg",
    creatorName: "Walid Bouaka",
    creatorImg:
      "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g=",
    comment:
      "This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.",
    status: 1,
  },
  {
    code: "678900",
    name: "ROULEAU DE PEAUX RACE PRO 2.0",
    brand: "Ma marque",
    family: "Matériel de montagne",
    subFamily: "Montagne",
    supplier: "Millet",
    productImg:
      "https://www.auvieuxcampeur.fr/media/catalog/product/cache/f83a0334dfee85ff9d02a56cf16dc6c2/8/2/821580047_603.jpg",
    creatorName: "Walid Bouaka",
    creatorImg:
      "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g=",
    comment:
      "La peau Pomoca Race 2.0 offre une glisse incroyable grâce à un nouveau procédé de glisse utilisant un produit de très haute qualité. Un conseil pour améliorer la glisse : vous crayonnez le poil avec un fart tendre, puis un passage avec le fer à farter pour gorger le poil et le tour est joué. Vendue au mètre.",
    status: 0,
  },
  {
    code: "678900",
    name: "SHORT SPOTLESS EVOLUTION W",
    brand: "Ma marque",
    family: "Matériel de montagne",
    subFamily: "Montagne",
    supplier: "Millet",
    productImg:
      "https://www.auvieuxcampeur.fr/media/catalog/product/cache/f83a0334dfee85ff9d02a56cf16dc6c2/8/0/804560306_152.jpg",
    creatorName: "Michel Jambon",
    creatorImg:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Michel_Cremades.jpg",
    comment:
      "Mesdames, ce short Spotless Evolution Royal Robbins est juste parfait pour toutes vos aventures en plein air ! Ultra confortable, anti-tâches (oui, vous avez bien lu !), et extensible dans tous les sens pour suivre tous vos mouvements. Que vous partiez en rando ou juste pour une journée à flâner dehors, ce short est l’indispensable absolu !",
    status: 1,
  },
  {
    code: "678900",
    name: "PIOLET AIR TECH EVO",
    brand: "Ma marque",
    family: "Matériel de montagne",
    subFamily: "Montagne",
    supplier: "Millet",
    productImg:
      "https://www.auvieuxcampeur.fr/media/catalog/product/cache/f83a0334dfee85ff9d02a56cf16dc6c2/8/0/802890193_303.jpg",
    creatorName: "Jean Pourpre",
    creatorImg: "https://ekladata.com/ixROJV5Yo31eHvhwZqcq5aAvKZU.jpg",
    comment:
      "Mesdames, ce short Spotless Evolution Royal Robbins est juste parfait pour toutes vos aventures en plein air !",
    status: 1,
  },
  {
    code: "678900",
    name: "COUTEAU CO-PILOT",
    brand: "Ma marque",
    family: "Matériel de montagne",
    subFamily: "Montagne",
    supplier: "Millet",
    productImg:
      "https://www.auvieuxcampeur.fr/media/catalog/product/cache/f83a0334dfee85ff9d02a56cf16dc6c2/8/0/804270088_303_A.jpg",
    creatorName: "Walid Bouaka",
    creatorImg:
      "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g=",
    comment:
      "Mesdames, ce short Spotless Evolution Royal Robbins est juste parfait pour toutes vos aventures en plein air !",
    status: 1,
  },
  {
    code: "678900",
    name: "COUTEAU CO-PILOT",
    brand: "Ma marque",
    family: "Matériel de montagne",
    subFamily: "Montagne",
    supplier: "Millet",
    productImg:
      "https://www.auvieuxcampeur.fr/media/catalog/product/cache/f83a0334dfee85ff9d02a56cf16dc6c2/8/0/804270088_303_A.jpg",
    creatorName: "Walid Bouaka",
    creatorImg:
      "https://media.istockphoto.com/id/1386479313/fr/photo/heureuse-femme-daffaires-afro-am%C3%A9ricaine-mill%C3%A9naire-posant-isol%C3%A9e-sur-du-blanc.jpg?s=612x612&w=0&k=20&c=CS0xj40eNCorQyzN1ImeMKlvPDocPHSaMsXethQ-Q_g=",
    comment:
      "Mesdames, ce short Spotless Evolution Royal Robbins est juste parfait pour toutes vos aventures en plein air !",
    status: 2,
  },
];

export const LINKCARD_DRAFT: LinkCard[] = [
  {
    name: "Brouillons",
    page: "draft",
  },
  {
    name: "En cours de validation...",
    page: "in progress",
  },
  {
    name: "Validée",
    page: "done",
  },
];

