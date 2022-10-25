<template>
  <div class="doc-header">
    <div class="header-logo">
      <a class="logo-link" href="#" @click="toHome"></a>
    </div>
    <div class="header-nav">
      <a class="switch-lang" @click="switchLang">
        <img src="https://m.hellobike.com/resource/helloyun/13459/QgPJutNlCZ.png" alt="">
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from 'vue';
import { nav } from '@/config.json';
import { version } from '/package.json';
import { RefData } from '@/sites/assets/util/ref';

export default defineComponent({
  name: 'doc-header',
  components: {},
  setup() {
    let packages = [] as any[];
    nav.forEach((item) => {
      packages.push(...item.packages);
    });
    const data = reactive({
      verson: '1.x',
      navIndex: 0,
      activeIndex: 0,
      isShowSelect: false
    });
    const handleFocus = () => {
      console.log(1);
    };
    const handleFocusOut = () => {
      data.isShowSelect = false;
    };

    const toHome = () => {
      RefData.getInstance().currentRoute.value = '/';
    };

    const isActive = computed(() => {
      let value = RefData.getInstance().currentRoute.value;
      return function (name: string) {
        const lName = name.toLowerCase();
        if (lName !== 'component') {
          return value === lName || lName.includes(value);
        }
      };
    });

    const switchLang = () => {
      let href = '';
      
      if (localStorage.getItem("language") === 'en-US') {  // 英文
        localStorage.setItem("language", "zh-CN");
        href = location.href.replace('en-US', 'zh-CN');
      } else {
        localStorage.setItem("language", "en-US"); // 中文
        href = location.href.replace('zh-CN', 'en-US');
      }
      location.href = href;
      window.location.reload();
    };
    
    return {
      version,
      data,
      toHome,
      isActive,
      handleFocus,
      handleFocusOut,
      switchLang
    };
  }
});
</script>

<style lang="scss" src="./index.scss"></style>
