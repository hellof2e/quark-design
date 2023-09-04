export default {
  save: "บันทึก",
  confirm: "ยืนยัน",
  cancel: "ยกเลิก",
  delete: "ลบ",
  loading: "กำลังโหลด",
  placehold: "โปรดป้อนเนื้อหา",
  image: {
    loadError: "การโหลดล้มเหลว",
  },
  pullRefresh: {
    pulling: "ดึงลงเพื่อรีเฟรช...",
    loosing: "ปล่อยเพื่อรีเฟรช...",
  },
  search: {
    placeholder: "โปรดป้อนคำค้นหา",
  },
  actionSheet: {
    shareTitle: "แชร์ไปที่",
  },
  calendar: {
    end: "จบ",
    start: "เริ่ม",
    title: "การเลือกวันที่",
    weekdays: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
    monthTitle: (year: number, month: number) => `${year}ปี${month}เดือน`,
    rangePrompt: (maxRange: number | string) =>
      `จำนวนวันที่เลือกต้องไม่เกิน ${maxRange} วัน`,
  },
};
