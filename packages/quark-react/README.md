# quark-react

The bottom layer relies on the `quarkd` component library, which solves the problem that web componnents events need to manually addEventListener in react.

底层依托 `Quark` 组件库，解决了 web componnents 事件在 react 中需要手动 addEventListener 的问题。

## Install

```bash
npm install @quarkd/quark-design
```

## Usage

```js
import { Search } from "@quarkd/quark-react";
<Search
  className="xxx"
  onChange={onChange}
  onFocus={onFocus}
  onBlur={onBlur}
  onSearch={onSearch}
  onCancel={onCancel}
  onBack={onBack}
/>;
```
