<template>
  <div class="demo tab-demo">
    <h2>{{ translate("title.basic") }}</h2>
    <div class="demo-item">
      <quark-tabs :activekey="data.active">
        <quark-tab-content :label="translate('tab')[0]">{{
          translate("tabs")[0]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[1]">{{
          translate("tabs")[1]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[2]" disabled>
          {{ translate("tabs")[2] }}
        </quark-tab-content>
        <quark-tab-content :label="translate('tab')[3]">{{
          translate("tabs")[3]
        }}</quark-tab-content>
      </quark-tabs>
    </div>

    <h2>{{ translate("title.name") }}</h2>
    <div class="demo-item">
      <quark-tabs :activekey="data.activeName">
        <quark-tab-content :label="translate('tab')[0]" name="a">
          {{ translate("tabs")[0] }}
        </quark-tab-content>
        <quark-tab-content :label="translate('tab')[1]" name="b">
          {{ translate("tabs")[1] }}
        </quark-tab-content>
        <quark-tab-content :label="translate('tab')[2]" disabled name="c">
          {{ translate("tabs")[2] }}
        </quark-tab-content>
        <quark-tab-content :label="translate('tab')[3]" name="d">
          {{ translate("tabs")[3] }}
        </quark-tab-content>
      </quark-tabs>
    </div>

    <h2>{{ translate("title.scroll") }}</h2>
    <div class="demo-item">
      <quark-tabs>
        <quark-tab-content :label="translate('tab')[0]">{{
          translate("tabs")[0]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[1]">{{
          translate("tabs")[1]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[2]">{{
          translate("tabs")[2]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[3]">{{
          translate("tabs")[3]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[4]">{{
          translate("tabs")[4]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[5]">{{
          translate("tabs")[5]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[6]">{{
          translate("tabs")[6]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[7]">{{
          translate("tabs")[7]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[8]">{{
          translate("tabs")[8]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[9]">{{
          translate("tabs")[9]
        }}</quark-tab-content>
      </quark-tabs>
    </div>

    <h2>{{ translate("title.click") }}</h2>
    <div class="demo-item">
      <quark-tabs :activekey="data.activeName1" @change="onChange">
        <quark-tab-content :label="translate('tab')[0]" name="a">
          {{ translate("tabs")[0] }}
        </quark-tab-content>
        <quark-tab-content :label="translate('tab')[1]" name="b">
          {{ translate("tabs")[1] }}
        </quark-tab-content>
        <quark-tab-content
          :label="translate('tab')[2]"
          :disabled="data.disabled"
          name="c"
        >
          {{ translate("tabs")[2] }}
        </quark-tab-content>
        <quark-tab-content :label="translate('tab')[3]" name="d">
          {{ translate("tabs")[3] }}
        </quark-tab-content>
      </quark-tabs>
    </div>

    <h2>{{ translate("title.sticky") }}</h2>
    <div class="demo-item">
      <quark-tabs sticky offsettop="17vw">
        <quark-tab-content :label="translate('tab')[0]">{{
          translate("tabs")[0]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[1]">{{
          translate("tabs")[1]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[2]">{{
          translate("tabs")[2]
        }}</quark-tab-content>
        <quark-tab-content :label="translate('tab')[3]">{{
          translate("tabs")[3]
        }}</quark-tab-content>
      </quark-tabs>
    </div>
  </div>
</template>

<script>
import Toast from "../toast/index";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("tab");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";

export default createDemo({
  setup() {
    const data = ref({
      active: 1,
      activeName: "d",
      activeName1: "d",
      disabled: "true",
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "????????????",
            name: "??????????????????",
            scroll: "????????????",
            click: "????????????",
            sticky: "????????????",
          },
          selected: "???????????????",
          tab: [
            "??????1",
            "??????2",
            "??????3",
            "??????4",
            "??????5",
            "??????6",
            "??????7",
            "??????8",
            "??????9",
            "??????10",
          ],
          tabs: [
            "??????1??????",
            "??????2??????",
            "??????3??????",
            "??????4??????",
            "??????5??????",
            "??????6??????",
            "??????7??????",
            "??????8??????",
            "??????9??????",
            "??????10??????",
          ],
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            name: "Match by Name",
            scroll: "Horizontal Scrolling",
            click: "Click Event",
            sticky: "Sticky Effect",
          },
          selected: "Currently Selected: ",
          tab: [
            "Tab1",
            "Tab2",
            "Tab3",
            "Tab4",
            "Tab5",
            "Tab6",
            "Tab7",
            "Tab8",
            "Tab9",
            "Tab10",
          ],
          tabs: [
            "Tab1 Content",
            "Tab2 Content",
            "Tab3 Content",
            "Tab4 Content",
            "Tab5 Content",
            "Tab6 Content",
            "Tab7 Content",
            "Tab8 Content",
            "Tab9 Content",
            "Tab10 Content",
          ],
        },
      });
    });
    const onChange = ({ detail }) => {
      data.value.activeName1 = detail.name;
      data.value.disabled = !data.value.disabled;
      Toast.text(`${translate("selected")}` + detail.label);
    };
    return {
      data,
      onChange,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
