export default {
  save: "保存",
  confirm: "确认",
  cancel: "取消",
  delete: "删除",
  loading: "加载中...",
  placehold: "请输入内容",
  image: {
    loadError: "加载失败",
  },
  pullRefresh: {
    pulling: "下拉即可刷新...",
    loosing: "松开立即刷新...",
  },
  search: {
    placeholder: "请输入搜索关键词",
  },
  actionSheet: {
    shareTitle: "分享到",
  },
  calendar: {
    end: "结束",
    start: "开始",
    title: "日期选择",
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    monthTitle: (year: number, month: number) => `${year}年${month}月`,
    rangePrompt: (maxRange: number) => `最多选择 ${maxRange} 天`,
  },
};
