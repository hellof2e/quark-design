import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './components/Index.vue';
import { nav } from '../../config.json';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Index
  }
];

const findComponentName = (name: string) => {
  for (const key in nav) {
    if (Object.prototype.hasOwnProperty.call(nav, key)) {
      const element = nav[key];
      let idx = element.packages.findIndex(
        (i) => i.name.toLowerCase() === name
      );
      if (idx !== -1) {
        return element.packages[idx].name;
      }
    }
  }
};

/** vite */
const modulesPage = import.meta.glob('../../../../packages/quark/src/**/demo.vue');
for (const path in modulesPage) {
  let name = (/src\/(.*)\/demo.vue/.exec(path) as any[])[1];
  
  routes.push({
    path: `/${name}`,
    // 这里获取到组件
    component: modulesPage[path],
    name,
    meta: {
      ComponentName: findComponentName(name)
    }
  });

  routes.push({
    path: `/${name}-react`,
    // 这里获取到组件
    component: modulesPage[path],
    name: `${name}-react`,
    meta: {
      ComponentName: findComponentName(name)
    }
  });
}

routes.push({
  name: 'NotFound',
  path: '/:path(.*)+',
  redirect: () => '/'
});

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from) => {
  const actionSheets = document.querySelectorAll('quark-actionsheet');
  // @ts-ignore
  actionSheets.forEach(i => i.open = false)

  const overlays = document.querySelectorAll('quark-overlay');
  // @ts-ignore
  overlays.forEach(i => i.open = false)

  const popupExtras = document.querySelectorAll('quark-popupextra');
  // @ts-ignore
  popupExtras.forEach(i => i.open = false)

  const shareSheets = document.querySelectorAll('quark-sharesheet');
  // @ts-ignore
  shareSheets.forEach(i => i.open = false)

  return true
})

export default router;
