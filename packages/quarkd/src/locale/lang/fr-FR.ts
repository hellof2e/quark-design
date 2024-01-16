export default {
  save: "Sauvegarder",
  confirm: "Confirmer",
  cancel: "Annuler",
  delete: "Suprimer",
  loading: "Chargement...",
  placehold: "Entrez...",
  image: {
    loadError: "Échec du chargement",
  },
  pullRefresh: {
    pulling: "Tirer pour actualiser...",
    loosing: "Relâchez pour actualiser...",
  },
  search: {
    placeholder: "Entrez...",
  },
  actionSheet: {
    shareTitle: "Partager avec",
  },
  calendar: {
    end: "Fin",
    start: "Début",
    title: "Calendrier",
    weekdays: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number | string) =>
      `Choisir pas plus de ${maxRange} jours`,
  },
};
