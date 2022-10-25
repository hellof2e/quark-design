export default class DblKeyMap<Key1, Key2, Value> {
  private map: Map<Key1, Map<Key2, Value>> = new Map();

  get(key1: Key1, key2: Key2) {
    const subMap = this.map.get(key1);
    if (subMap) {
      return subMap.get(key2);
    }
  }

  set(key1: Key1, key2: Key2, value: Value) {
    let subMap = this.map.get(key1);
    if (!subMap) {
      subMap = new Map();
      this.map.set(key1, subMap);
    }
    subMap?.set(key2, value);
  }

  forEach(cb: (value: Value, key1: Key1, key2: Key2) => void) {
    this.map.forEach((subMap, key1) => {
      subMap.forEach((value, key2) => {
        cb(value, key1, key2);
      });
    });
  }

  delete(key1: Key1) {
    this.map.delete(key1);
  }

  deleteAll() {
    this.map.forEach((_, key1) => {
      this.map.delete(key1);
    });
  }
}
