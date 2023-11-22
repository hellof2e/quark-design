<template>
  <div class="demo no-padding action-sheet-demo">
    <h2>{{ translate("basic") }}</h2>
    <quark-dropdown-menu>
      <quark-dropdown-item
        ref="dropdownItemRef1"
        :value="value1"
      ></quark-dropdown-item>
      <quark-dropdown-item
        ref="dropdownItemRef2"
        :value="value2"
      ></quark-dropdown-item>
    </quark-dropdown-menu>

    <h2>{{ translate("customContent") }}</h2>
    <quark-dropdown-menu>
      <quark-dropdown-item
        ref="dropdownItemRef3"
        value="0"
      ></quark-dropdown-item>
      <quark-dropdown-item ref="dropdownItemRef4" :title="translate('title')">
        <quark-cell :title="translate('title1')">
          <quark-switch
            :checked="switch1"
            @change="onSwitch1Change"
          ></quark-switch>
        </quark-cell>
        <quark-cell :title="translate('title2')">
          <quark-switch
            :checked="switch2"
            @change="onSwitch2Change"
          ></quark-switch>
        </quark-cell>
        <div style="padding: 5px 16px">
          <quark-button type="primary" size="big" @click="onConfirm">
            {{ translate("confirm") }}
          </quark-button>
        </div>
      </quark-dropdown-item>
    </quark-dropdown-menu>

    <h2>{{ translate("customColor") }}</h2>
    <quark-dropdown-menu active-color="#f00">
      <quark-dropdown-item
        ref="dropdownItemRef5"
        :value="value1"
      ></quark-dropdown-item>
      <quark-dropdown-item
        ref="dropdownItemRef6"
        :value="value2"
      ></quark-dropdown-item>
    </quark-dropdown-menu>

    <h2>{{ translate("disabled") }}</h2>
    <quark-dropdown-menu>
      <quark-dropdown-item
        disabled
        :value="value1"
        ref="dropdownItemRef7"
      ></quark-dropdown-item>
      <quark-dropdown-item
        disabled
        :value="value2"
        ref="dropdownItemRef8"
      ></quark-dropdown-item>
    </quark-dropdown-menu>

    <h2>{{ translate("direction") }}</h2>
    <quark-dropdown-menu direction="up" hide-overlay>
      <quark-dropdown-item
        ref="dropdownItemRef9"
        value="0"
      ></quark-dropdown-item>
      <quark-dropdown-item
        ref="dropdownItemRef10"
        value="a"
      ></quark-dropdown-item>
    </quark-dropdown-menu>

    <h2>{{ translate("swipeItems") }}</h2>
    <quark-dropdown-menu :swipe-threshold="4">
      <quark-dropdown-item
        ref="dropdownItemRef11"
        value="0"
      ></quark-dropdown-item>
      <quark-dropdown-item
        ref="dropdownItemRef12"
        value="a"
      ></quark-dropdown-item>
      <quark-dropdown-item disabled></quark-dropdown-item>
      <quark-dropdown-item disabled></quark-dropdown-item>
      <quark-dropdown-item disabled></quark-dropdown-item>
      <quark-dropdown-item disabled></quark-dropdown-item>
    </quark-dropdown-menu>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
import { onBeforeMount, ref, onMounted } from "vue";
const { createDemo, translate } = createComponent("dropdownmenu");
import { useTranslate } from "@/sites/assets/util/useTranslate";

export default createDemo({
  props: {},
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基本用法",
          title: "筛选",
          title1: "包邮",
          title2: "团购",
          confirm: "确认",
          customContent: "自定义菜单内容",
          customColor: "自定义选中状态颜色",
          disabled: "禁用菜单",
          direction: "向上展开",
          option1: [
            { text: "全部商品", value: "0" },
            { text: "新款商品", value: "1 " },
            { text: "活动商品", value: "2 " },
          ],
          option2: [
            { text: "默认排序", value: "a" },
            { text: "好评排序", value: "b" },
            { text: "销量排序", value: "c" },
          ],
          swipeItems: "横向滚动",
        },
        "en-US": {
          basic: "Basic Usage",
          title: "Title",
          title1: "Title",
          title2: "Title",
          customContent: "Custom Content",
          customColor: "Custom Active Color",
          confirm: "Confirm",
          disabled: "Disabled",
          direction: "Expand Direction",
          option1: [
            { text: "Option 0", value: "0" },
            { text: "Option 1", value: "1 " },
            { text: "Option 2", value: "2 " },
          ],
          option2: [
            { text: "Option A", value: "a" },
            { text: "Option B", value: "b" },
            { text: "Option C", value: "c" },
          ],
          swipeItems: "Swipe Items",
        },
      });
    });

    const value = ref(1);
    const value1 = ref("0");
    const value2 = ref("a");
    const switch1 = ref(true);
    const switch2 = ref(false);
    const onSwitch1Change = (e) => {
      switch1.value = e.detail.value;
    };
    const onSwitch2Change = (e) => {
      switch2.value = e.detail.value;
    };

    const dropdownItemRef1 = ref(null);
    const dropdownItemRef2 = ref(null);
    const dropdownItemRef3 = ref(null);
    const dropdownItemRef4 = ref(null);
    const dropdownItemRef5 = ref(null);
    const dropdownItemRef6 = ref(null);
    const dropdownItemRef7 = ref(null);
    const dropdownItemRef8 = ref(null);
    const dropdownItemRef9 = ref(null);
    const dropdownItemRef10 = ref(null);
    const dropdownItemRef11 = ref(null);
    const dropdownItemRef12 = ref(null);

    onMounted(() => {
      dropdownItemRef1.value.setOptions(translate("option1"));
      dropdownItemRef2.value.setOptions(translate("option2"));
      dropdownItemRef3.value.setOptions(translate("option1"));
      dropdownItemRef5.value.setOptions(translate("option1"));
      dropdownItemRef6.value.setOptions(translate("option2"));
      dropdownItemRef7.value.setOptions(translate("option1"));
      dropdownItemRef8.value.setOptions(translate("option2"));
      dropdownItemRef9.value.setOptions(translate("option1"));
      dropdownItemRef10.value.setOptions(translate("option2"));
      dropdownItemRef11.value.setOptions(translate("option1"));
      dropdownItemRef12.value.setOptions(translate("option2"));
    });

    const onConfirm = () => {
      dropdownItemRef4.value.toggle();
    };

    return {
      translate,
      value1,
      value2,
      value: value,
      switch1,
      switch2,
      onConfirm,
      onSwitch1Change,
      onSwitch2Change,
      dropdownItemRef1,
      dropdownItemRef2,
      dropdownItemRef3,
      dropdownItemRef4,
      dropdownItemRef5,
      dropdownItemRef6,
      dropdownItemRef7,
      dropdownItemRef8,
      dropdownItemRef9,
      dropdownItemRef10,
      dropdownItemRef11,
      dropdownItemRef12,
    };
  },
});
</script>

<style src="./demo.scss"></style>
