# quark-rollup-plugin-css-variable
一个能够支持替换css中符合规则的变量的rollup插件。

---

## Usage

rollup.config.js
```js
import cssVariable from '@quarkd/rollup-plugin-css-variable';

const variableMap = {
  textColorWhite: '#ffffff',
}

export default {
  input: 'index.js',
  output: { file: 'dist/index.js', format: 'esm'},
  plugins: [
    // 建议放在第一位
    cssVariable({
      variableMap,
      prefix: 'quark-'
    })
  ]
};
```

style.css - input
```css
.text-white {
  color: quark-textColorWhite;
}
```

style.css - output
```css
.text-white {
  color: #ffffff;
}
```
