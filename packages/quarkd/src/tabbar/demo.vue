<template>
  <div class="demo no-padding">
    <h2>{{ translate("title.basic") }}</h2>
    <quark-tabbar fixed="false">
      <quark-tabbar-item :label="translate('tabbar.home')">
        <quark-icon-home slot="icon" size="20" />
      </quark-tabbar-item>
      <quark-tabbar-item :label="translate('tabbar.user')">
        <quark-icon-user slot="icon" size="20" />
      </quark-tabbar-item>
      <quark-tabbar-item :label="translate('tabbar.tel')">
        <quark-icon-tel slot="icon" size="20" />
      </quark-tabbar-item>
    </quark-tabbar>

    <h2>{{ translate("title.name") }}</h2>
    <quark-tabbar value="tel" fixed="false">
      <quark-tabbar-item :label="translate('tabbar.home')" name="home">
        <quark-icon-home slot="icon" size="20" />
      </quark-tabbar-item>
      <quark-tabbar-item :label="translate('tabbar.user')" name="user">
        <quark-icon-user slot="icon" size="20" />
      </quark-tabbar-item>
      <quark-tabbar-item :label="translate('tabbar.tel')" name="tel">
        <quark-icon-tel slot="icon" size="20" />
      </quark-tabbar-item>
    </quark-tabbar>

    <h2>{{ translate("title.badge") }}</h2>
    <quark-tabbar value="1" :fixed="false">
      <quark-tabbar-item badgecontent="20" :label="translate('tabbar.home')">
        <quark-icon-home slot="icon" size="20" />
      </quark-tabbar-item>
      <quark-tabbar-item :label="translate('tabbar.user')">
        <quark-icon-user slot="icon" size="20" />
      </quark-tabbar-item>
      <quark-tabbar-item :label="translate('tabbar.tel')">
        <quark-icon-tel slot="icon" size="20" />
      </quark-tabbar-item>
    </quark-tabbar>

    <h2>{{ translate("title.icon") }}</h2>
    <quark-tabbar :fixed="false" @change="onChange2">
      <quark-tabbar-item :label="translate('tabbar.home')">
        <quark-icon-home slot="icon" size="20" />
      </quark-tabbar-item>
      <quark-tabbar-item :label="translate('tabbar.user')">
        <img
          slot="icon"
          style="height: 20px"
          :src="data.activeIndex === '1' ? data.img1 : data.img2"
        />
      </quark-tabbar-item>
      <quark-tabbar-item :label="translate('tabbar.tel')">
        <quark-icon-tel slot="icon" size="20" />
      </quark-tabbar-item>
    </quark-tabbar>

    <h2>{{ translate("title.color") }}</h2>
    <quark-tabbar :fixed="false" inactivecolor="#000" activeColor="#ee0a24">
      <quark-tabbar-item :label="translate('tabbar.home')">
        <quark-icon-home slot="icon" size="20" />
      </quark-tabbar-item>
      <quark-tabbar-item :label="translate('tabbar.user')">
        <quark-icon-user slot="icon" size="20" />
      </quark-tabbar-item>
      <quark-tabbar-item :label="translate('tabbar.tel')">
        <quark-icon-tel slot="icon" size="20" />
      </quark-tabbar-item>
    </quark-tabbar>

    <h2>{{ translate("title.event") }}</h2>
    <quark-tabbar @change="onChange1" :fixed="false">
      <quark-tabbar-item :label="translate('tabbar.home')">
        <quark-icon-home slot="icon" size="20" />
      </quark-tabbar-item>
      <quark-tabbar-item :label="translate('tabbar.user')">
        <quark-icon-user slot="icon" size="20" />
      </quark-tabbar-item>
      <quark-tabbar-item :label="translate('tabbar.tel')">
        <quark-icon-tel slot="icon" size="20" />
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
            name: "通过名称匹配",
            badge: "徽标提示",
            icon: "自定义图标",
            color: "自定义颜色",
            event: "自定义切换事件",
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
            name: "Match by Name",
            badge: "Badge Tips",
            icon: "Custom Icon",
            color: "Custom Color",
            event: "Custom Change Event",
          },
          tabbar: {
            home: "Home",
            user: "User",
            tel: "Tel",
          },
        },
      });
    });
    const onChange2 = ({ detail }) => {
      data.value.activeIndex = detail.value;
    };
    const onChange1 = ({ detail }) => {
      Toast.text(`当前选中：${detail.value}`);
    };
    return {
      data,
      onChange1,
      onChange2,
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
