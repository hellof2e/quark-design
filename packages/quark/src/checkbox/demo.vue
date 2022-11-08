<template>
  <div class="demo demo-checkbox">
    <h2>{{ translate("title.basic") }}</h2>
    <div class="checkbox-container">
      <quark-checkbox :checked="mycheck" @change="onChange">{{
        translate("checked.true")
      }}</quark-checkbox>
      <quark-checkbox :checked="false">{{
        translate("checked.false")
      }}</quark-checkbox>
    </div>

    <h2>{{ translate("title.type") }}</h2>
    <div class="checkbox-container">
      <quark-checkbox checked="true" shape="round">{{
        translate("type.round")
      }}</quark-checkbox>
      <quark-checkbox checked="true" shape="square">{{
        translate("type.square")
      }}</quark-checkbox>
    </div>

    <h2>{{ translate("title.size") }}</h2>
    <div class="checkbox-container">
      <quark-checkbox checked="true" shape="round" size="big">{{
        translate("size.default")
      }}</quark-checkbox>
      <quark-checkbox checked="true" shape="square" size="big">{{
        translate("size.square")
      }}</quark-checkbox>
    </div>

    <h2>{{ translate("title.disabled") }}</h2>
    <div class="checkbox-container">
      <quark-checkbox checked="true" disabled>{{
        translate("disabled.checked")
      }}</quark-checkbox>
      <quark-checkbox checked="false" disabled>{{
        translate("disabled.unchecked")
      }}</quark-checkbox>
    </div>

    <h2>{{ translate("title.group") }}</h2>
    <div class="checkbox-container">
      <quark-checkbox-group :value="groupValue.join()" @change="onGroupChange">
        <quark-checkbox :name="translate('group.apple')">{{
          translate("group.apple")
        }}</quark-checkbox>
        <quark-checkbox :name="translate('group.orange')" disabled>{{
          translate("group.orange")
        }}</quark-checkbox>
        <quark-checkbox :name="translate('group.banana')">{{
          translate("group.banana")
        }}</quark-checkbox>
      </quark-checkbox-group>
      <div className="picked">
        {{ translate("group.selected") }}{{ groupValue }}
      </div>
    </div>

    <h2>{{ translate("title.selectedColor") }}</h2>
    <div class="checkbox-container my-color">
      <quark-checkbox :checked="true">{{
        translate("title.selectedColor")
      }}</quark-checkbox>
    </div>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("checkbox");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";
import Quarkcheckbox from "./index.js";

export default createDemo({
  setup() {
    const mycheck = ref(true);
    const groupValue = ref([]);
    const onChange = ({ detail }) => {
      mycheck.value = detail.value;
    };
    const onGroupChange = ({ detail }) => {
      groupValue.value = detail.value;
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "复选框基础用法",
            type: "复选框类型",
            size: "复选框大小",
            disabled: "复选框禁用状态",
            group: "复选框群组",
            selectedColor: "复选框选中颜色自定义",
          },
          checked: {
            true: "勾选",
            false: "不勾选",
          },
          type: {
            round: "圆形(默认)",
            square: "方形",
          },
          size: {
            default: "默认形状-大",
            square: "方形-大",
          },
          disabled: {
            checked: "已选-禁用",
            unchecked: "未选-禁用",
          },
          group: {
            apple: "苹果",
            orange: "橘子",
            banana: "香蕉",
            selected: "已选: ",
          },
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            type: "Checkbox Type",
            size: "Checkbox Size",
            disabled: "Disabled Checkbox",
            group: "Checkbox Group",
            selectedColor: "Custom Selected Color",
          },
          checked: {
            true: "Checked",
            false: "Unchecked",
          },
          type: {
            round: "Round(Default)",
            square: "Square",
          },
          size: {
            default: "Default Type - Big",
            square: "Square - Big",
          },
          disabled: {
            checked: "Checked - Disabled",
            unchecked: "Unchecked - Disabled",
          },
          group: {
            apple: "Apple",
            orange: "Orange",
            banana: "Banana",
            selected: "Selected: ",
          },
        },
      });
      groupValue.value = [
        `${translate("group.apple")}`,
        `${translate("group.orange")}`,
      ];
    });
    return {
      mycheck,
      groupValue,
      onChange,
      onGroupChange,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
