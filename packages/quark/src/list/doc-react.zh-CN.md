# List

### 介绍

用来展示长列表，在列表将要滚动到底部时，触发事件来加载更多列表项。

### 安装使用

```tsx
import { List } from "@quarkd/quark-react";
```

### 基础用法

```tsx
export default () => {
  const [loading1, setLoading1] = useState(false);
  const [finished1, setFinished1] = useState(false);
  const [list1, setList1] = useState([]);

  const onLoad1 = () => {
    if (finished1) {
      return;
    }
    setLoading1(true);
    setTimeout(() => {
      for (let i = 0; i < 10; i += 1) {
        setList1((list1) => [...list1, list1.length + 1]);
      }
      setLoading1(false);
      if (list1.length >= 30) {
        setFinished1(true);
      }
    }, 1000);
  };

  return (
    <List
      loading={loading1}
      finished={finished1}
      finishedtext="finished text"
      onLoad={onLoad1}
    >
      <div slot="content">
        {list1.map((item) => (
          <div className="list-list" key={item}>
            {item}
          </div>
        ))}
      </div>
    </List>
  );
};
```

### 错误提示

在发生错误时, 可以点错误提示信息重新拉取数据

```tsx
export default () => {
  const [loading2, setLoading2] = useState(false);
  const [finished2, setFinished2] = useState(false);
  const [error2, setError2] = useState(false);
  const [list2, setList2] = useState([]);

  const onLoad2 = () => {
    setError2(false);
    if (finished2) {
      return;
    }
    setLoading2(true);
    setTimeout(() => {
      for (let i = 0; i < 10; i += 1) {
        setList2((list2) => [...list2, list2.length + 1]);
      }
      if (list2.length === 0) {
        setError2(true);
      } else {
        setError2(false);
      }
      setLoading2(false);
      if (list2.length >= 30) {
        setFinished2(true);
      }
    }, 1000);
  };

  return (
    <List
      onLoad={onLoad2}
      onReload={onLoad2}
      loading={loading2}
      error={error2}
      finished={finished2}
      errortext="Error, click retry"
    >
      <div slot="content">
        {list2.map((item) => (
          <div className="list-list" key={item}>
            {item}
          </div>
        ))}
      </div>
    </List>
  );
};
```

### 自定义提示

```tsx
    <List
      {...props}
    >
      <div slot="content">
        {...}
      </div>
     <div className="list-text" slot="finished">自定义的结束提示</div>
      <div className="list-text" slot="error">自定义的错误提示</div>
      <div className="list-text" slot="loading">
        <Loading size='15'> 自定义加载</Loading>
      </div>
    </List>
```

### 下拉刷新

可以和下拉刷新组件联合使用

```tsx
export default () => {

  const [refresh, setRefresh] = useState(0);
  const onRefresh = () = {
    setRefresh((refresh) => (refresh += 1));
  }

  return
    (
      <PullRefresh loading={loading} onRefresh="onRefresh">
        <div slot="content" className="pull-content">
          <List
            {...props}
          >
          <div slot="content">
            {...}
          </div>
        </List>
        </div>
      </PullRefresh>
    )
  }
```

### Props

| 参数         | 说明                                                       | 类型         | 默认值      |
| ------------ | ---------------------------------------------------------- | ------------ | ----------- |
| error        | 是否加载失败，加载失败后点击错误提示可以重新触发 load 事件 | `boolean`    | `false`     |
| loading      | 是否处于加载状态，加载过程中不触发 load 事件               | `boolean`    | `false`     |
| finished     | 数据是否加载结束                                           | `boolean`    | `false`     |
| offset       | 滚动条与底部距离小于 offset 时触发 load 事件               | `number`     | `300`       |
| loadingtext  | 加载过程中的提示文案                                       | `string`     | `加载中...` |
| finishedtext | 加载完成后的提示文案                                       | `string`     |             |
| errortext    | 加载失败后的提示文案                                       | `string`     |             |
| textcolor    | 提示文案字体颜色                                           | `string`     | `#879099`   |
| onLoad       | 滚动条与底部距离小于 offset 时触发                         | `() => void` |             |
| onReload     | 发生错误, 点击重试时触发                                   | `() => void` |             |

### slots

| 名称     | 说明                         |
| -------- | ---------------------------- |
| content  | 要展示的内容                 |
| finished | 自定义的结束状态提示内容     |
| error    | 自定义的错误提示内容         |
| loading  | 自定义的加载过程中的提示信息 |
