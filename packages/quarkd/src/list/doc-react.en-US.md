# List

### Intro

A list component to show items and control loading status.

### Install

```tsx
import { List } from "@quarkd/quark-react";
```

### Basic Usage

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

### Error Text

After loading is error, reloading will be Emitted only when error text clicked.

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

### Custom Info

```tsx
    <List
      {...props}
    >
      <div slot="content">
        {...}
      </div>
     <div className="list-text" slot="finished">Custom finished text</div>
      <div className="list-text" slot="error">Custom error text</div>
      <div className="list-text" slot="loading">
        <Loading size='15'> Custom loading</Loading>
      </div>
    </List>
```

### PullRefresh

Can be used with `pull-refresh` component.

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

## API

### Props

| Arribute     | Description                                                                                               | Type         | Default      |
| ------------ | --------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| error        | Whether loading is error, the load event will be Emitted only when error text clicked                     | `boolean`    | `false`      |
| loading      | Whether to show loading info, the load event will not be Emitted when loading                             | `boolean`    | `false`      |
| finished     | Whether loading is finished                                                                               | boolean      | `false`      |
| offset       | The load event will be Emitted when the distance between the scrollbar and the bottom is less than offset | `number`     | `300`        |
| loadingtext  | Loading text                                                                                              | `string`     | `loading...` |
| finishedtext | Finished text                                                                                             | `string`     |              |
| errortext    | Error loaded text                                                                                         | `string`     |              |
| textcolor    | Text font color                                                                                           | `string`     | `#879099`    |
| onLoad       | Emitted when the distance between the scrollbar and the bottom is less than offset                        | `() => void` |              |
| onReload     | Emitted when click retry after loading is error                                                           | `() => void` |              |

### slots

| Name     | Description          |
| -------- | -------------------- |
| content  | List content         |
| finished | Custom finished tips |
| error    | Custom error tips    |
| loading  | Custom loading tips  |
