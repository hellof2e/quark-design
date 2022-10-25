import { useRoutes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const modulesPage = import.meta.glob('/src/packages/**/demo.jsx');
let name;
const routes = [
  {
    path: '/',
    component: lazy(() => import(`./components/Index.jsx`)),
  },
];

for (const path in modulesPage) {
  name = /packages\/(.*)\/demo/.exec(path)[1];
  routes.push({
    path: `/${name}`,
    component: lazy(() => import(/* @vite-ignore */ path)),
  });
}

routes.push({
  path: '*',
  component: lazy(() => import('./components/Index.jsx')),
});

const changeRouter = (routers) => routers.map((item) => {
  item.element = (
      <Suspense fallback={<div>loading</div>}>
        <item.component />
      </Suspense>
  );
  return item;
});

export default () => useRoutes(changeRouter(routes));
