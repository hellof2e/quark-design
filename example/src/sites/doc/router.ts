import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Index from "./views/Index.vue";
import Component from "./views/Component.vue";
const pagesRouter: Array<RouteRecordRaw> = [];

/** vite */
// ps: 用 fast-glob 也可以
const modulesPage = import.meta.glob(
	`../../../../packages/quarkd/src/**/doc.zh-CN.md`
);

for (const path in modulesPage) {
	const name = (/src\/(.*)\/doc.zh-CN.md/.exec(path) as any[])[1];
	pagesRouter.push({
		path: `/zh-CN/component/${name}`,
		component: modulesPage[path],
		name: `zh-CN/component/${name}`,
	});
}

const pagesEnRouter: Array<RouteRecordRaw> = [];
const modulesEnPage = import.meta.glob(
	"../../../../packages/quarkd/src/**/doc.en-US.md"
);
for (const path in modulesEnPage) {
	const name = (/src\/(.*)\/doc.en-US.md/.exec(path) as any[])[1];
	pagesEnRouter.push({
		path: `/en-US/component/${name}`,
		component: modulesEnPage[path],
		name: `en-US/component/${name}`,
	});
}

/** react 中英文文档 */
const modulesPageReact = (import.meta as any).glob(
	"../../../../packages/quarkd/src/**/doc-react.zh-CN.md"
);
for (const path in modulesPageReact) {
	const name = (/src\/(.*)\/doc-react.zh-CN.md/.exec(path) as any[])[1];
	pagesRouter.push({
		path: `/zh-CN/component/${name}-react`,
		component: modulesPageReact[path],
	});
}

const modulesEnPageReact = (import.meta as any).glob(
	"../../../../packages/quarkd/src/**/doc-react.en-US.md"
);
for (const path in modulesEnPageReact) {
	const name = (/src\/(.*)\/doc-react.en-US.md/.exec(path) as any[])[1];
	pagesEnRouter.push({
		path: `/en-US/component/${name}-react`,
		component: modulesEnPageReact[path],
	});
}

const routes: Array<RouteRecordRaw> = [
	{
		path: "/zh-CN/component/button",
		name: "index",
		component: Index,
		children: [
			{
				path: "/zh-CN/component",
				name: "component",
				component: Component,
				children: pagesRouter,
			},
			{
				path: "/en-US/component",
				name: "enComponent",
				component: Component,
				children: pagesEnRouter,
			},
		],
	},
];

routes.push({
	name: "notFound",
	path: "/:path(.*)+",
	redirect: {
		path: "/zh-CN/component/button",
	},
});

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior(to) {
		if (to.hash) {
			const id = to.hash.split("#")[1];
			const ele = document.getElementById(id);
			setTimeout(() => {
				ele && ele.scrollIntoView(true);
			});
		}
	},
});

export default router;
