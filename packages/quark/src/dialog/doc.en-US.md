# Dialog（等待pr）

// TODO

## API

### Props

| Attribute         | Description                           | Type   | Default     |
|--------------|----------------------------------|--------|------------------|
| title        | Title | `string`      | 
| content      | Content | `string`       |
| oktext      | Confirm button | `string `                  |`Confirm`|
| canceltext      | Cancel button | `string `              |`Cancel`|
| open         | Dialog status | `boolean `               |      `require`       |
| zindex         | Dialog z-index | `number`                |      `999`       |
| type        | Type |` modal`、`confirm`    | `modal`
| btnvertical         | Whether the button is vertical, the default is horizontal | `boolean`                |      `false`       |
| nofooter         | Whether to show footer | `boolean`       |      `false`       |
| hideclose         | Whether to hide the close button in the upper right corner | `boolean`                |      `false`      |
| maskclosable         | Whether the click mask allow to close | `boolean`                |      `false`      |
| autoclose         | Whether the click event is closed by default | `boolean`                |   `true`          |
| hide| When autoclose is false, the function call manually makes the dialog disappear to meet flexible asynchronous requirements dialog.hide()  |`() => void`|

### Slots
| Name         | 	Description                             | 
|--------------|----------------------------------|
| slot  | Custom dialog body               |               
| slot name=close    | Custom close icon including position, size, and type                    |   
| slot name=footer    | 	Custom footer                  |      
### Events

| Event         | Description                         | Type   |
|--------------|----------------------------------|--------|
| confirm         | Emitted when the confirm button is clicked       |  `() => void`        |
| cancel     | Emitted when the cancel button is clicked    |     `() => void`     |
| close     | Emitted when closing Dialog       |     `() => void`     |

## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles. Please refer to[Theme customization](#/zh-CN/guide/theme)。

| Name                  | Description                            | Default Value         | 
| ------------------------ | ----------------------------------- | --------------- |
| `--dialog-width`   | Dialog width                     |     `320px`
| `--dialog-title-font-size`   | Title font size                          |  
| `--dialog-title-color`       | Title font color                          | `#242729`       
| `--dialog-title-font-family`       | Title font family                    |        
| `--dialog-title-line-height` | Title line height                          | 
| `--dialog-title-font-weight` | Title font weight                          | `700`    
| `--dialog-content-font-size` | Content font size            | `14px`    
| `--dialog-content-color`    | Content font color                        |      `#5A6066`  
| `--dialog-content-font-weight`       | Content font weight                | `400`       
| `--dialog-content-font-family`        | Content font family             |     `14px`   
| `--dialog-content-line-height`  | Content line height                          | `20px`  
| `--dialog-btn-border-radius`  | Bottom button border radius                          | `8px`  
| `--dialog-btn-font-size`  | Bottom button font size                        | `16px`  
| `--dialog-btn-height`  | Bottom button height                 | `40px`  
