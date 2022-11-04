<template>
	<div class="demo button-demo">
		<h2>{{ translate("base") }}</h2>
		<div class="demo-buttons">
			<quark-countdown  :time="time1" />
		</div>
    <h2>{{ translate("format") }}</h2>
    <div class="demo-buttons">
			<quark-countdown 
        format="MM:SS"
        :time="time2" 
        class="mgr-10"
      />
      <quark-countdown 
        format="MM-SS"
        :time="time2" 
        class="mgr-10"
      />
      <quark-countdown 
        format="MM SS"
        :time="time2" 
      />
		</div>
    <h2>{{ translate("callback") }}</h2>
    <div class="demo-buttons">
			<quark-countdown 
        :time="time3" 
        @end="onEnd"
      />
		</div>
    <h2>{{ translate("style") }}</h2>
    <div class="demo-buttons">
			<quark-countdown
        class="css"
        :time="time1" 
      />
		</div>
	</div>
</template>
<script>
import { onBeforeMount, ref } from "vue";
import { createComponent } from "@/utils/create";
import Toast from '../toast'
const { createDemo, translate } = createComponent("button");
import { useTranslate } from "@/sites/assets/util/useTranslate";

export default createDemo({
	setup() {
    const time1 = ref(7200000)
    const time2 = ref(360000)
    const time3 = ref(5000)

		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
          base: '基本使用',
          format: '格式化',
          callback: '结束回调',
          style: '样式自定义',
          slot: '自定义间隔符'
				},
				"en-US": {
          base: 'Basic Usage',
          format: 'Custom Format',
          callback: 'End the callback',
          style: 'Custom Style',
          slot: 'Custom spacer'
				},
			});
		});

    const onEnd = () => {
      Toast.text('开始秒杀')
    }
		return {
			translate,
      time1,
      time2,
      time3,
      onEnd
		};
	},
});
</script>
<style src="./demo.scss"></style>
