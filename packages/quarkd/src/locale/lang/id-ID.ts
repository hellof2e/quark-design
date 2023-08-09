export default {
  save: "Simpan",
  confirm: "Konfirmasi",
  cancel: "Batal",
  delete: "Hapus",
  loading: "Memuat...",
  placehold: "Silakan masukkan konten",
  image: {
    loadError: "Pemuatan gagal",
  },
  pullRefresh: {
    pulling: "Tarik ke bawah untuk menyegarkan...",
    loosing: "Lepaskan untuk menyegarkan...",
  },
  search: {
    placeholder: "Silakan masukkan kata kunci pencarian",
  },
  actionSheet: {
    shareTitle: "Bagikan ke",
  },
  calendar: {
    end: "Akhir",
    start: "Mulai",
    title: "Kalender",
    weekdays: ["minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number | string) =>
      `Pilih tidak lebih dari ${maxRange} hari`,
  },
};
