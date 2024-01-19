export default {
  save: "保存",
  confirm: "確認",
  cancel: "取消",
  delete: "刪除",
  loading: "加載中",
  placehold: "請輸入內容",
  image: {
    loadError: "加載失敗",
  },
  pullRefresh: {
    pulling: "下拉即可刷新...",
    loosing: "釋放即可刷新...",
  },
  search: {
    placeholder: "請輸入搜索關鍵詞",
  },
  actionSheet: {
    shareTitle: "分享到",
  },
  calendar: {
    end: "結束",
    start: "開始",
    title: "日期選擇",
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    monthTitle: (year: number, month: number) => `${year}年${month}月`,
    rangePrompt: (maxRange: number | string) => `最多選擇 ${maxRange} 天`,
  },
};
