<template>
  <div class="demo no-padding action-sheet-demo">
    <h2>{{ translate("basic") }}</h2>
    <quark-dropdown-menu>
      <quark-dropdown-item
        ref="dropdownItemRef1"
        :value="value1"
        @change="onChange"
        @open="onOpen"
        @close="onClose"
      ></quark-dropdown-item>
      <quark-dropdown-item
        ref="dropdownItemRef2"
        :value="value2"
      ></quark-dropdown-item>
    </quark-dropdown-menu>

    <h2>自定义菜单内容</h2>
    <quark-dropdown-menu>
      <quark-dropdown-item
        ref="dropdownItemRef3"
        value="0"
      ></quark-dropdown-item>
      <quark-dropdown-item ref="dropdownItemRef4" title="筛选">
        <quark-cell title="包邮">
          <quark-switch
            :checked="switch1"
            @change="onSwitch1Change"
          ></quark-switch>
        </quark-cell>
        <quark-cell title="团购">
          <quark-switch
            :checked="switch2"
            @change="onSwitch2Change"
          ></quark-switch>
        </quark-cell>
        <div style="padding: 5px 16px">
          <quark-button type="primary" size="big" @click="onConfirm">
            确定
          </quark-button>
        </div>
      </quark-dropdown-item>
    </quark-dropdown-menu>

    <h2>自定义选中态颜色</h2>
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

    <h2>向上展开</h2>
    <quark-dropdown-menu direction="up">
      <quark-dropdown-item
        ref="dropdownItemRef9"
        value="0"
      ></quark-dropdown-item>
      <quark-dropdown-item
        ref="dropdownItemRef10"
        value="a"
      ></quark-dropdown-item>
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
          disabled: "禁用菜单",
          title: "带标题",
          cancel: "带取消按钮",
          titleStyle: "标题样式",
          optionStyle: "选项样式",
          cancelStyle: "取消按钮样式",
          options: ["选项一", "选项二", "选项三"],
          titleTxt: "我是标题信息",
          maskClick: "蒙版点击",
        },
        "en-US": {
          basic: "Basic Usage",
          disabled: "Disabled",
          title: "Title",
          cancel: "Cancel",
          titleStyle: "Title Style",
          optionStyle: "Option Style",
          cancelStyle: "Cancel Style",
          options: ["Option 1", "Option 2", "Option 3"],
          titleTxt: "Title Message",
          maskClick: "Mask Click",
        },
      });
    });

    const value = ref(1);
    const value1 = ref("0");
    const value2 = ref("a");
    const switch1 = ref(true);
    const switch2 = ref(false);
    const option1 = [
      { text: "全部商品", value: "0" },
      { text: "新款商品", value: "1 " },
      { text: "活动商品", value: "2 " },
    ];
    const option2 = [
      { text: "默认排序", value: "a" },
      { text: "好评排序", value: "b" },
      { text: "销量排序", value: "c" },
    ];
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

    onMounted(() => {
      dropdownItemRef1.value.setOptions(option1);
      dropdownItemRef2.value.setOptions(option2);
      dropdownItemRef3.value.setOptions(option1);
      dropdownItemRef5.value.setOptions(option1);
      dropdownItemRef6.value.setOptions(option2);
      dropdownItemRef7.value.setOptions(option1);
      dropdownItemRef8.value.setOptions(option2);
      dropdownItemRef9.value.setOptions(option1);
      dropdownItemRef10.value.setOptions(option2);
    });

    const onConfirm = () => {
      dropdownItemRef4.value.toggle();
    };

    const onChange = (e) => {
      console.log("on change", e);
    };

    const onOpen = () => {
      console.log("on open");
    };

    const onClose = () => {
      console.log("on close");
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
      onChange,
      onOpen,
      onClose,
    };
  },
});
</script>

<style src="./demo.scss"></style>
