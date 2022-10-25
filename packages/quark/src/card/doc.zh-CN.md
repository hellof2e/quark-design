# Card 卡片

### 介绍

通用卡片容器。

### 安装使用

```tsx
import 'quarkd/lib/card';
```

### 基本使用
```html
<quark-card
    title='This is title'
    tips='100'
    content='This is loooooooong text content of `Card`'
    desc='footer content'
/>
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| title        | 标题 | String                     |
| content      | 内容 | String                     |
| tips         | 提示信息 | String                     |             |
| desc         | footer | String                     |         |

## CSS变量

组件提供了以下[CSS变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                     | 说明                                  | 默认值          | 
| ------------------------ | ----------------------------------- | --------------- |
| --card-height   | 卡片高度                          |     138px   |
| --card-border-radius       | 卡片圆角                          | 4px       |
| --card-hspacing       | 卡片左右间距                       |    20px|    
| --card-vspacing | 卡片上下边距                          | 20px       |
| --card-title-font-size    | 卡片标题字体大小                          |       14px| 
| --card-title-color        | 卡片标题颜色                         | #999      | 
| --card-content-font-size    | 卡片内容字体大小                          |       14px| 
| --card-content-color        | 卡片内容字体颜色                         | #666      | 
| --card-tips-color | 卡片tips颜色                          | #333       |
| --card-tips-font-size    | 卡片tips字体大小                          |       15px| 
| --card-desc-color        | 卡片footer字体颜色                         | #999      | 
| --card-desc-font-size        | 卡片footer字体大小                       |        14px|
