<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style lang="scss">
::selection {
  background: #0088ff;
  color: #fff;
}
#doc {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 68px;
}
</style>
