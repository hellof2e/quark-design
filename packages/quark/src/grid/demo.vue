<template>
  <div class="demo demo-badge">
    <h2>{{ translate("basic") }}</h2>
    <quark-grid>
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
    </quark-grid>

    <h2>{{ translate("column") }}</h2>
    <quark-grid column="3">
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
    </quark-grid>

    <h2>{{ translate("square") }}</h2>
    <quark-grid column="3" square>
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
    </quark-grid>

    <h2>{{ translate("border") }}</h2>
    <quark-grid noborder>
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
      <quark-grid-item
        icon="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
        :text="translate('text')"
      />
    </quark-grid>

    <h2>{{ translate("custom") }}</h2>
    <quark-grid column="3">
      <quark-grid-item>
        <img
          src="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
          style="width: 40px"
        />
      </quark-grid-item>
      <quark-grid-item>
        <img
          src="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
          style="width: 40px"
        />
      </quark-grid-item>
      <quark-grid-item>
        <img
          src="https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png"
          style="width: 40px"
        />
      </quark-grid-item>
    </quark-grid>
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("grid");
import { useTranslate } from "@/sites/assets/util/useTranslate";

export default createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基本使用",
          column: "自定义列数",
          square: "正方形格子",
          border: "无边框",
          custom: "自定义内容",
          text: "文字",
        },
        "en-US": {
          basic: "Basic Usage",
          column: "Custom Column",
          square: "Square Cell",
          border: "No Border",
          custom: "Custom Content",
          text: "text",
        },
      });
    });
    return {
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
