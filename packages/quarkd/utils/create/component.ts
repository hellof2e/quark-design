import { defineComponent } from "vue";
import locale from "@/locale";
import { getPropByPath, isFunction } from "../util";

export function createComponent(name: string) {
  const componentName = "quark-" + name;

  return {
    componentName,

    translate(keyPath: string, ...args: unknown[]): string {
      // 依赖响应能力
      const languages = locale.languages();
      const text =
        getPropByPath(languages, `${name.replace("-", "")}.${keyPath}`) ||
        getPropByPath(languages, keyPath);
      return isFunction(text) ? text(...args) : text;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createDemo: function (_component: any) {
      _component.baseName = name;

      _component.name = "demo-" + name;
      return defineComponent(_component);
    } as typeof defineComponent,
  };
}
