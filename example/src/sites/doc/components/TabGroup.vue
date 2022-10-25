<template>
    <div class="tab-group">
      <div ref="barRef" class="tab-bar" :style="{ width: widthRef + 'px' }"></div>
      <div ref="titsRef" class="tab-header" layout="row" layout-wrap>
        <div
          ref="titRef"
          :class="[{ active: activeKey == item.props.actKey }, 'tab-nav']"
          v-for="(item, index) in tabTitLists"
          :key="item"
          @click="onTabClick($event, item, index)"
        >
          {{ item.props.label }}
        </div>
      </div>
      <div class="tab-panel">
        <slot></slot>
      </div>
    </div>
  </template>
  <script>
  import { ref, onMounted, provide } from "vue";

  export default {
    props: {
      defaultKey: {
        type: String,
        default: "1",
      },
    },
    setup(props, context) {
      const tabTitLists = context.slots.default();
      let activeKey = ref(props.defaultKey); //当前key
      provide("activeKey", activeKey);
  
      const barRef = ref(null);
      const titRef = ref(null);
      let widthRef = ref();
      onMounted(() => {
        // 设置状态线初始化宽度
        widthRef.value = 80;
      });
      function onTabClick(event, tab, index) {
        activeKey.value = tab.props.actKey;
      }
      return {
        tabTitLists,
        barRef,
        titRef,
        widthRef,
        onTabClick,
        activeKey,
      };
    },
  };
  </script>
  <style scoped lang="scss">
  .tab-group {
    .tab-header {
      &:after {
        content: "";
        width: 100%;
        border-bottom: 2px solid #ddd;
      }
    }
    .tab-nav {
      color: #242729;
      font-size: 18px;
      line-height: 60px;
      font-weight: 500;
      display: inline-block;
      margin-right: 3em;
      cursor: pointer;
      border-bottom: 4px solid transparent;
      &.active {
        color: #0088ff;
        border-bottom-color: #0088ff;
      }
    }
    .tab-panel{
      padding: 15px;
    }
  }
  </style>