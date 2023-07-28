export default {
  save: "Save",
  confirm: "Confirm",
  cancel: "Cancel",
  delete: "Delete",
  loading: "Loading...",
  placehold: "Please input content",
  image: {
    loadError: "Loaded error",
  },
  pullRefresh: {
    pulling: "Pull to refresh...",
    loosing: "Loose to refresh...",
  },
  search: {
    placeholder: "Please input keywords",
  },
  actionSheet: {
    shareTitle: "Share to",
  },
  calendar: {
    end: "End",
    start: "Start",
    title: "Calendar",
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Choose no more than ${maxRange} days`,
  },
};
