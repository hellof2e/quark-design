<template>
  <div class="demo">
    <h2>{{ translate("basicUsage") }}</h2>
    <quark-popover
      scroolhidden
      :open="data.light"
      theme="light"
      placement="bottomleft"
      ref="lightRef"
      @close="close('light')"
      @select="handleLightSelect"
    >
      <div class="quark-popover" @click="open('light')">
        {{ translate("lightStyle") }}
      </div>
    </quark-popover>

    <quark-popover
      scroolhidden
      :open="data.dark"
      theme="dark"
      ref="darkRef"
      @close="close('dark')"
      @select="handleDarkSelect"
    >
      <div class="quark-popover" @click="open('dark')">
        {{ translate("darkStyle") }}
      </div>
    </quark-popover>

    <h2>{{ translate("settings") }}</h2>
    <quark-popover
      scroolhidden
      :open="data.icon"
      placement="bottomleft"
      ref="iconRef"
      theme="light"
      @close="close('icon')"
      @select="handleIconSelect"
    >
      <div class="quark-popover" @click="open('icon')">
        {{ translate("showIcon") }}
      </div>
    </quark-popover>
    <quark-popover
      scroolhidden
      theme="light"
      :open="data.disable"
      ref="disableRef"
      @close="close('disable')"
      @select="handleDisableSelect"
    >
      <div class="quark-popover" @click="open('disable')">
        {{ translate("disable") }}
      </div>
    </quark-popover>
    <h2>{{ translate("") }}</h2>
    <quark-popover
      scroolhidden
      :open="data.content"
      placement="bottomleft"
      @close="close('content')"
    >
      <div class="quark-popover" @click="open('content')">
        {{ translate("customContent") }}
      </div>
      <div
        slot="content"
        class="quark-popover-content"
        @click="close('content')"
      >
        {{ translate("content") }}
      </div>
    </quark-popover>
  </div>
</template>
<script>
import Toast from "../toast/index";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("popover");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import { options } from "preact";

export default createDemo({
  setup() {
    const data = ref({
      light: false,
      dark: false,
      icon: false,
      disable: false,
      content: false,
    });

    const lightRef = ref(null);
    const darkRef = ref(null);
    const iconRef = ref(null);
    const disableRef = ref(null);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basicUsage: "基础用法",
          lightStyle: "浅色风格",
          darkStyle: "深色风格",
          settings: "选项配置",
          showIcon: "展示图标",
          disable: "禁用状态",
          customContent: "自定义内容",
          content: "我是自定义内容",
          options: ["选项一", "选项二", "选项三"],
        },
        "en-US": {
          basicUsage: "Basic Usage",
          lightStyle: "Light Style",
          darkStyle: "Dark Style",
          settings: "Option Settings",
          showIcon: "Show Icon",
          disable: "disabled",
          customContent: "Custom Content",
          content: "This is custom content",
          options: ["Option 1", "Option 2", "Option 3"],
        },
      });
    });
    onMounted(() => {
      const actions = [
        {
          text: `${translate("options")[0]}`,
        },
        {
          text: `${translate("options")[1]}`,
        },
        {
          text: `${translate("options")[2]}`,
        },
      ];
      lightRef.value.setActions(actions);
      darkRef.value.setActions(actions);
      iconRef.value.setActions([
        {
          text: `${translate("options")[0]}`,
        },
        {
          text: `${translate("options")[1]}`,
          icon: "tel",
        },
        {
          text: `${translate("options")[2]}`,
          icon: "https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png",
        },
      ]);
      disableRef.value.setActions([
        {
          text: `${translate("options")[0]}`,
          disabled: true,
        },
        {
          text: `${translate("options")[1]}`,
        },
        {
          text: `${translate("options")[2]}`,
        },
      ]);
    });

    const handleLightSelect = ({ detail }) => {
      const { action, index } = detail;
      Toast.text(action.text);
      close("light");
    };
    const handleDarkSelect = ({ detail }) => {
      const { action, index } = detail;
      Toast.text(action.text);
      close("dark");
    };
    const handleIconSelect = ({ detail }) => {
      const { action, index } = detail;
      Toast.text(action.text);
      close("icon");
    };
    const handleDisableSelect = ({ detail }) => {
      const { action, index } = detail;
      Toast.text(action.text);
      close("disable");
    };
    const open = (name) => {
      data.value[name] = true;
      data.value.test = true;
    };
    const close = (name) => {
      data.value[name] = false;
    };

    return {
      translate,
      data,
      lightRef,
      darkRef,
      iconRef,
      disableRef,
      handleLightSelect,
      handleDarkSelect,
      handleIconSelect,
      handleDisableSelect,
      open,
      close,
    };
  },
});
</script>

<style src="./demo.scss"></style>
