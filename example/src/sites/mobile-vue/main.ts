import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/sites/assets/styles/reset.scss';
import '@/utils/touchEmulator';

const app = createApp(App);
app.use(router);
app.mount('#app')
app.config.errorHandler = (err: any, vm, info) => {
    // 处理错误
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    // console.log(err, 'quarkui.config.errorHandler err------>')
    // console.log(vm, 'quarkui.config.errorHandler vm------>')
    // console.log(info, 'quarkui.config.errorHandler info------>')
}
