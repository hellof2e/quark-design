<template>
  <div class="demo demo-circle">
    <h2>{{ translate("CellTitle.basicUsage") }}</h2>
    <quark-circle :rate="rate">{{ rate }}%</quark-circle>
    <div>
      <quark-button type="primary" shape="square" @click="increase">
        {{ translate("increase") }}
      </quark-button>
      &nbsp;
      <quark-button type="danger" shape="square" @click="decrease">
        {{ translate("decrease") }}
      </quark-button>
    </div>

    <h2>{{ translate("CellTitle.custom") }}</h2>
    <quark-circle :rate="rate" size="80">
      {{ translate("size") }}
    </quark-circle>
    <quark-circle :rate="rate" color="#02b357">
      {{ translate("color") }}
    </quark-circle>
    <quark-circle :rate="rate" :strokewidth="5">
      {{ translate("strokewidth") }}
    </quark-circle>
    <quark-circle :rate="rate" layercolor="#f00">
      {{ translate("layercolor") }}
    </quark-circle>
    <quark-circle :rate="rate" :anticlockwise="anticlockwise">
      {{ translate("anticlockwise") }}
    </quark-circle>
    <quark-circle
      ref="circleRef"
      class="custom"
      :strokewidth="5"
      :rate="rate"
      size="100"
    >
      {{ translate("size") }}
    </quark-circle>
    <h2>{{ translate("CellTitle.position") }}</h2>
    <quark-circle :rate="rate" startposition="right">
      {{ translate("right") }}
    </quark-circle>
    <quark-circle :rate="rate" startposition="bottom">
      {{ translate("bottom") }}
    </quark-circle>
    <quark-circle :rate="rate" startposition="left">
      {{ translate("left") }}
    </quark-circle>
  </div>
</template>
<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("cell");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount, onMounted } from "vue";

export default createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          CellTitle: {
            basicUsage: "基本用法",
            custom: "样式定制",
            position: "起始位置",
          },
          size: "大小定制",
          color: "颜色定制",
          strokewidth: "宽度定制",
          layercolor: "轨道颜色",
          anticlockwise: "逆时针",
          gradient: "渐变色",
          right: "右侧",
          bottom: "下侧",
          left: "左侧",
          increase: "增加",
          decrease: "减少",
        },
        "en-US": {
          CellTitle: {
            basicUsage: "Basic Usage",
            custom: "Custom Style",
            position: "Start Position",
          },
          size: "Size",
          color: "Color",
          strokewidth: "Strokewidth",
          layercolor: "Layercolor",
          anticlockwise: "Anticlockwise",
          gradient: "Gradient",
          right: "Right",
          bottom: "Bottom",
          left: "Left",
          increase: "Increase",
          decrease: "Decrease",
        },
      });
    });

    const rate = ref(10);

    const increase = () => {
      rate.value += rate.value >= 100 ? 0 : 10;
    };
    const decrease = () => {
      rate.value -= rate.value <= 0 ? 0 : 10;
    };

    const anticlockwise = ref(true);

    const circleRef = ref();
    onMounted(() => {
      circleRef.value.setGradient({
        "0%": "#3fecff",
        "100%": "#6149f6",
      });
    });

    return {
      translate,
      rate,
      circleRef,
      increase,
      decrease,
      anticlockwise,
    };
  },
});
</script>

<style src="./demo.scss"></style>
