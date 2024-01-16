export default {
  save: "セーブ",
  confirm: "確認",
  cancel: "キャンセル",
  delete: "削除",
  loading: "読み込み中...",
  placehold: "割引コードを入力してください",
  image: {
    loadError: "読み込みに失敗しました",
  },
  pullRefresh: {
    pulling: "プルダウンして更新...",
    loosing: "リリース時に更新...",
  },
  search: {
    placeholder: "割引コードを入力してください",
  },
  actionSheet: {
    shareTitle: "共有先",
  },
  calendar: {
    end: "終了",
    start: "開始",
    title: "日付選択",
    weekdays: ["日", "月", "火", "水", "木", "金", "土"],
    monthTitle: (year: number, month: number) => `${year}年/${month}月`,
    rangePrompt: (maxRange: number | string) => `${maxRange}日まで選択`,
  },
};
