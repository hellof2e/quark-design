<template>
  <div class="demo icon-demo no-padding">
    <quark-tabs activekey="tab1">
      <quark-tab-content :label="translate('label.example')" name="tab1">
        <div>
          <h2 class="h2-custom">{{ translate("title.basic") }}</h2>
          <section class="demo-cell">
            <quark-icon-user size="26" />
          </section>
          <!-- <section class="demo-cell" style="background: #333">
            <quark-icon-whiteclose-o size="26" />
          </section> -->

          <h2 class="h2-custom">{{ translate("title.size") }}</h2>
          <section class="demo-cell">
            <quark-icon-user size="18"></quark-icon-user>
            <quark-icon-user size="24"></quark-icon-user>
            <quark-icon-user size="30"></quark-icon-user>
          </section>

          <h2 class="h2-custom">{{ translate("title.color") }}</h2>
          <section class="demo-cell">
            <quark-icon-user size="26" color="#F44336"></quark-icon-user>
            <quark-icon-user size="26" color="#3F51B5"></quark-icon-user>
          </section>
        </div>
      </quark-tab-content>
      <quark-tab-content :label="translate('label.basic')" name="tab2">
        <div class="icons-container">
          <div class="icon-item" @click="copyIcon('arrow-left')">
            <quark-icon-arrow-left size="26" />
            <span>arrow-left</span>
          </div>
          <div class="icon-item" @click="copyIcon('arrow-right')">
            <quark-icon-arrow-right size="26" />
            <span>arrow-right</span>
          </div>
          <div class="icon-item" @click="copyIcon('arrow-up')">
            <quark-icon-arrow-up size="26" />
            <span>arrow-up</span>
          </div>
          <div class="icon-item" @click="copyIcon('arrow-down')">
            <quark-icon-arrow-down size="26" />
            <span>arrow-down</span>
          </div>
          <div class="icon-item" @click="copyIcon('close')">
            <quark-icon-close size="26" />
            <span>close</span>
          </div>
          <div class="icon-item" @click="copyIcon('success')">
            <quark-icon-success size="26" />
            <span>success</span>
          </div>
          <div class="icon-item" @click="copyIcon('plus')">
            <quark-icon-plus size="26" />
            <span>plus</span>
          </div>
          <div class="icon-item" @click="copyIcon('more-h')">
            <quark-icon-more-h size="26" />
            <span>more-h</span>
          </div>
          <div class="icon-item" @click="copyIcon('more-v')">
            <quark-icon-more-v size="26" />
            <span>more-v</span>
          </div>
          <div class="icon-item" @click="copyIcon('warning')">
            <quark-icon-warning size="26" />
            <span>warning</span>
          </div>
        </div>
      </quark-tab-content>
      <quark-tab-content :label="translate('label.wireframe')" name="tab3">
        <div class="icons-container">
          <div class="icon-item" @click="copyIcon('home')">
            <quark-icon-home size="26" />
            <span>home</span>
          </div>
          <div class="icon-item" @click="copyIcon('search')">
            <quark-icon-search size="26" />
            <span>search</span>
          </div>
          <div class="icon-item" @click="copyIcon('message')">
            <quark-icon-message size="26" />
            <span>message</span>
          </div>
          <div class="icon-item" @click="copyIcon('setting')">
            <quark-icon-setting size="26" />
            <span>setting</span>
          </div>
          <div class="icon-item" @click="copyIcon('user')">
            <quark-icon-user size="26" />
            <span>user</span>
          </div>
          <div class="icon-item" @click="copyIcon('tel')">
            <quark-icon-tel size="26" />
            <span>tel</span>
          </div>

          <div class="icon-item" @click="copyIcon('close-o')">
            <quark-icon-close-o size="26" />
            <span>close-o</span>
          </div>
          <div class="icon-item" @click="copyIcon('notify')">
            <quark-icon-notify size="26" />
            <span>notify</span>
          </div>
          <div class="icon-item" @click="copyIcon('warning-o')">
            <quark-icon-warning-o size="26" />
            <span>warning-o</span>
          </div>
          <div class="icon-item" @click="copyIcon('info')">
            <quark-icon-info size="26" />
            <span>info</span>
          </div>
          <div class="icon-item" @click="copyIcon('edit')">
            <quark-icon-edit size="26" />
            <span>edit</span>
          </div>
          <div class="icon-item" @click="copyIcon('help')">
            <quark-icon-help size="26" />
            <span>help</span>
          </div>
          <div class="icon-item" @click="copyIcon('scan')">
            <quark-icon-scan size="26" />
            <span>scan</span>
          </div>
          <div class="icon-item" @click="copyIcon('good-job')">
            <quark-icon-good-job size="26" />
            <span>good-job</span>
          </div>
          <div class="icon-item" @click="copyIcon('comment')">
            <quark-icon-comment size="26" />
            <span>comment</span>
          </div>
          <div class="icon-item" @click="copyIcon('flash')">
            <quark-icon-flash size="26" />
            <span>flash</span>
          </div>
          <div class="icon-item" @click="copyIcon('like')">
            <quark-icon-like size="26" />
            <span>like</span>
          </div>
          <div class="icon-item" @click="copyIcon('star')">
            <quark-icon-star size="26" />
            <span>star</span>
          </div>
          <div class="icon-item" @click="copyIcon('expand')">
            <quark-icon-expand size="26" />
            <span>expand</span>
          </div>
          <div class="icon-item" @click="copyIcon('success-o')">
            <quark-icon-success-o size="26" />
            <span>success-o</span>
          </div>
          <div class="icon-item" @click="copyIcon('shop-cart')">
            <quark-icon-shop-cart size="26" />
            <span>shop-cart</span>
          </div>
          <div class="icon-item" @click="copyIcon('location')">
            <quark-icon-location size="26" />
            <span>location</span>
          </div>
          <div class="icon-item" @click="copyIcon('customer-service')">
            <quark-icon-customer-service size="26" />
            <span>service</span>
          </div>
          <div class="icon-item" @click="copyIcon('smile')">
            <quark-icon-smile size="26" />
            <span>smile</span>
          </div>
          <div class="icon-item" @click="copyIcon('unsmile')">
            <quark-icon-unsmile size="26" />
            <span>unsmile</span>
          </div>
          <div class="icon-item" @click="copyIcon('unsafe')">
            <quark-icon-unsafe size="26" />
            <span>unsafe</span>
          </div>
          <div class="icon-item" @click="copyIcon('safe')">
            <quark-icon-safe size="26" />
            <span>safe</span>
          </div>
          <div class="icon-item" @click="copyIcon('share')">
            <quark-icon-share size="26" />
            <span>share</span>
          </div>
          <div class="icon-item" @click="copyIcon('delete')">
            <quark-icon-delete size="26" />
            <span>delete</span>
          </div>
          <div class="icon-item" @click="copyIcon('refresh')">
            <quark-icon-refresh size="26" />
            <span>refresh</span>
          </div>
          <div class="icon-item" @click="copyIcon('synchronous')">
            <quark-icon-synchronous size="26" />
            <span>synchronous</span>
          </div>
          <div class="icon-item" @click="copyIcon('time')">
            <quark-icon-time size="26" />
            <span>time</span>
          </div>
          <div class="icon-item" @click="copyIcon('order')">
            <quark-icon-order size="26" />
            <span>order</span>
          </div>
        </div>
      </quark-tab-content>
      <quark-tab-content :label="translate('label.solid')" name="tab4">
        <div class="icons-container">
          <div class="icon-item" @click="copyIcon('camera-fill')">
            <quark-icon-camera-fill size="26" />
            <span>camera-fill</span>
          </div>
          <div class="icon-item" @click="copyIcon('star-fill')">
            <quark-icon-star-fill size="26" />
            <span>star-fill</span>
          </div>
          <div class="icon-item" @click="copyIcon('like-fill')">
            <quark-icon-like-fill size="26" />
            <span>like-fill</span>
          </div>
          <div class="icon-item" @click="copyIcon('success-fill')">
            <quark-icon-success-fill size="26" />
            <span>success-fill</span>
          </div>
          <div class="icon-item" @click="copyIcon('close-fill')">
            <quark-icon-close-fill size="26" />
            <span>close-fill</span>
          </div>
          <div class="icon-item" @click="copyIcon('good-job-fill')">
            <quark-icon-good-job-fill size="26" />
            <span>good-job-fill</span>
          </div>
          <div class="icon-item" @click="copyIcon('time-fill')">
            <quark-icon-time-fill size="26" />
            <span>time-fill</span>
          </div>
          <div class="icon-item" @click="copyIcon('help-fill')">
            <quark-icon-help-fill size="26" />
            <span>help-fill</span>
          </div>
          <div class="icon-item" @click="copyIcon('location-fill')">
            <quark-icon-location-fill size="26" />
            <span>location-fill</span>
          </div>
          <div class="icon-item" @click="copyIcon('info-fill')">
            <quark-icon-info-fill size="26" />
            <span>info-fill</span>
          </div>
          <div class="icon-item" @click="copyIcon('safe-fill')">
            <quark-icon-safe-fill size="26" />
            <span>safe-fill</span>
          </div>
          <div class="icon-item" @click="copyIcon('warning-fill')">
            <quark-icon-warning-fill size="26" />
            <span>warning-fill</span>
          </div>
          <div class="icon-item" @click="copyIcon('unsafe-fill')">
            <quark-icon-unsafe-fill size="26" />
            <span>unsafe-fill</span>
          </div>
        </div>
      </quark-tab-content>
    </quark-tabs>
  </div>
</template>
<script>
import { onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("icon");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import Toast from "../toast/index";
import * as Icons from "@quarkd/icons";

function copyToClipboard(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);

  const selection = document.getSelection();

  if (!selection) {
    return;
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  if (selected) {
    selection.removeAllRanges();
    selection.addRange(selected);
  }
}

export default createDemo({
  setup() {
    const copyIcon = (icon) => {
      const t = `<quark-icon-${icon} size="26" />`;
      copyToClipboard(t);
      Toast.text(`复制成功：${t}`);
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          label: {
            example: "用法示例",
            basic: "基础图标",
            wireframe: "线框风格",
            solid: "实底风格",
          },
          title: {
            basic: "基础用法",
            size: "图标大小",
            color: "图标颜色",
          },
        },
        "en-US": {
          label: {
            example: "For Example",
            basic: "Basic Icon",
            wireframe: "Wireframe Style",
            solid: "Solid Style",
          },
          title: {
            basic: "Basic Usage",
            size: "Icon Size",
            color: "Icon Color",
          },
        },
      });
    });
    return {
      translate,
      copyIcon,
    };
  },
});
</script>
<style src="./demo.scss"></style>
