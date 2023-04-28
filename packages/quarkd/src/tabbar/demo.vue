<template>
  <div class="demo no-padding">
    <h2>{{ translate("title.basic") }}</h2>
    <quark-tabbar @change="onChange">
      <quark-tabbar-item>
        <quark-icon-home size="20" />
        <div>{{ translate("tabbar.home") }}</div>
      </quark-tabbar-item>
      <quark-tabbar-item>
        <quark-icon-user size="20" />
        <div>{{ translate("tabbar.user") }}</div>
      </quark-tabbar-item>
      <quark-tabbar-item>
        <quark-icon-tel size="20" />
        <div>{{ translate("tabbar.tel") }}</div>
      </quark-tabbar-item>
    </quark-tabbar>

    <h2>{{ translate("title.noicon") }}</h2>
    <quark-tabbar>
      <quark-tabbar-item>{{ translate("tabbar.home") }}</quark-tabbar-item>
      <quark-tabbar-item>{{ translate("tabbar.user") }}</quark-tabbar-item>
      <quark-tabbar-item>{{ translate("tabbar.tel") }}</quark-tabbar-item>
    </quark-tabbar>

    <h2>{{ translate("title.name") }}</h2>
    <quark-tabbar active="2">
      <quark-tabbar-item name="home">
        <quark-icon-home size="20" />
        <div>{{ translate("tabbar.home") }}</div>
      </quark-tabbar-item>
      <quark-tabbar-item name="user">
        <quark-icon-user size="20" />
        <div>{{ translate("tabbar.user") }}</div>
      </quark-tabbar-item>
      <quark-tabbar-item name="tel">
        <quark-icon-tel size="20" />
        <div>{{ translate("tabbar.tel") }}</div>
      </quark-tabbar-item>
    </quark-tabbar>

    <h2>{{ translate("title.fixed") }}</h2>
    <quark-tabbar @change="onChange" fixed>
      <quark-tabbar-item>
        <quark-icon-home size="20" />
        <div>{{ translate("tabbar.home") }}</div>
      </quark-tabbar-item>
      <quark-tabbar-item>
        <quark-icon-user size="20" />
        <div>{{ translate("tabbar.user") }}</div>
      </quark-tabbar-item>
      <quark-tabbar-item>
        <quark-icon-tel size="20" />
        <div>{{ translate("tabbar.tel") }}</div>
      </quark-tabbar-item>
    </quark-tabbar>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("tabbar");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";
import Toast from "../toast/index";
import "@quarkd/icons/lib/home";
import "@quarkd/icons/lib/user";
import "@quarkd/icons/lib/tel";

export default createDemo({
  setup() {
    const data = ref({
      activeIndex: 0,
      img1: "https://m.hellobike.com/resource/helloyun/18625/MJ7Tr_src=http___inews.gtimg.com_newsapp_bt_0_12536239782_641.jpg&refer=http___inews.gtimg.jpeg",
      img2: "https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png",
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "基础用法",
            noicon: "不带图标",
            name: "默认激活菜单",
            badge: "徽标提示",
            color: "自定义颜色",
            event: "自定义切换事件(可制定路由切换)",
            fixed: "固定底部",
          },
          tabbar: {
            home: "首页",
            user: "我的",
            tel: "联系",
          },
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            noicon: "No Icon",
            name: "Default Active menu",
            badge: "Badge Tips",
            color: "Custom Color",
            event: "Custom Change Event",
            fixed: "Fixed",
          },
          tabbar: {
            home: "Home",
            user: "User",
            tel: "Tel",
          },
        },
      });
    });

    const onChange = ({ detail }) => {
      Toast.text(`当前选中：${detail.value}`);
    };

    return {
      data,
      onChange,
      translate,
    };
  },
});
</script>
<style scoped>
quark-icon {
  margin-right: 0;
}
.custom {
}
span {
  margin: 0;
}
</style>
