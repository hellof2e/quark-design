# Field 输入组件

### 介绍

输入组件

### 安装使用

```tsx
import { Field, FieldRef } from "@quarkd/quark-react";
```

### 基础用法

```html
<Field placeholder="请输入文本" label="文本" />
<Field type="password" value="123456" label="密码" />
<Field type="number" value="12345678901" max="11" label="数字" />
<Field value="一二三四五" maxlength="5" label="最多5位数" />
```

### 自定义标题/无标题

```html
<Field value="自定义标题">
  <div slot="label" class="label">
    <span>主标题</span>
    <span>这是一行副标题</span>
  </div>
</Field>
<Field placeholder="禁用label" value="无标题" class="oneLine" />
```

### 禁用与只读

```html
<Field value="我禁用了" label="禁用" disabled />
<Field placeholder="禁用label" />
<Field value="我是只读的" label="只读" readonly />
```

### 设置必填字段

```html
<Field placeholder="请输入" label="文本" required errormsg="不能为空" />
```

### css 属性

```html
<Field class="theme" value="css 属性" label="css" />
```

```css
.theme {
  --field-label-width: 100px;
  --field-label-text-color: green;
  --field-label-font-size: 18px;
  --field-label-margin-right: 10px;
  --field-input-text-color: #999;
  --field-input-font-size: 20px;
  --field-placeholder-text-color: red;
  --field-placeholder-font-size: 12px;
  --field-disabled-text-color: #eee;
}
```

### 事件

```tsx
export default () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(() => e.detail.value);
    Toast.text(e.detail.value);
  };

  const onBlur = () => {
    Toast.text("blur");
  };

  const onFocus = () => {
    Toast.text("focus");
  };

  return (
    <Field
      label="触发失焦事件"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};
```

### 设置校验规则

```js
export default () => {
  const fieldRef = useRef < FieldRef > null;
  useEffect(() => {
    const { current } = fieldRef;
    current.setRules([
      {
        validator: (val) => {
          if (!/^1[3456789]\d{9}$/.test(val)) {
            return false;
          }
          return true;
        },
        message: "请输入正确的手机号",
      },
    ]);
  }, []);
  return <Field placeholder="请输入文本" label="文本" ref={fieldRef} />;
};
```

## API

### Props

| 参数         | 说明                                     | 类型                                    | 默认值  |
| ------------ | ---------------------------------------- | --------------------------------------- | ------- |
| label        | 输入项描述, 不传隐藏 或者 slot = 'label' | `string`                                |
| type         | input 类型 默认 text                     | `string`                                | text    |
| value        | 表单值                                   | `string`                                |         |
| defaultvalue | 默认 value 值                            | `string`                                |         |
| name         | 表单需要                                 | `string`                                |         |
| placeholder  | 默认提示                                 | `string`                                | -       |
| min          | 继承原生 input 属性                      | `string`                                |         |
| minlength    | 继承原生 input 属性                      | `string`                                |         |
| max          | 继承原生 input 属性                      | `string`                                |         |
| maxlength    | 继承原生 input 属性                      | `string`                                |         |
| disabled     | 是否禁用                                 | `boolean`                               | `false` |
| readonly     | 是否只读                                 | `boolean`                               | `false` |
| required     | 是否必填                                 | `boolean`                               | `false` |
| errormsg     | 错误提示信息                             | `string`                                | -       |
| onChange     | 值改变事件                               | `(e: { detail: { value: string } }) => void` |         |
| onFocus      | 聚焦事件                                 | `(e: { detail: { value: string } }) => void` |         |
| onBlur       | 失焦事件                                 | `(e: { detail: { value: string } }) => void` |         |

### Method

| 名称     | 说明                 | 类型                     |
| -------- | -------------------- | ------------------------ |
| setRules | 用于设置表单校验规则 | `(rule: Rule[]) => void` |

### 类型定义

```js
type Rule = {
  message: string, // 错误提示
  validator: (value: string & number) => boolean, // 校验规则
};
```

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/theme)。

| 名称                             | 说明                 | 默认值    |
| -------------------------------- | -------------------- | --------- |
| `--field-label-width`            | label 宽度           | `119px`   |
| `--field-label-font-size`        | label 字体大小       | `15px`    |
| `--field-label-text-color`       | label 字体颜色       | `#242729` |
| `--field-label-font-weight`      | label 字重           |           |
| `--field-label-margin-right`     | label 右间距         | `12px`    |
| `--field-input-text-color`       | input 字体颜色       | `#242729` |
| `--field-input-align`            | input 对齐方式       | `left`    |
| `--field-input-font-size`        | input 字体大小       | `15px`    |
| `--field-placeholder-text-color` | input 提示字体颜色   | `#bcc4cc` |
| `--field-placeholder-font-size`  | input 提示字体大小   | `15px`    |
| `--field-disabled-text-color`    | 禁止字体颜色         | `#c8c9cc` |
| `--field-error-font-size`        | 错误提示字体大小     | `12px`    |
| `--field-error-text-color`       | 错误提示字体颜色     | `#F72626` |
| `--field-error-text-align`       | 错误提示字体对齐方式 | `left`    |
