class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, valueToStore) {
    let idx = this._hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push([key, valueToStore]);
    return this.keyMap[idx];
  }

  get(key) {
    let idx = this._hash(key);
    if (!this.keyMap[idx]) return undefined;

    let dataArray = this.keyMap[idx];
    for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i][0] == key) {
        return dataArray[i][1];
      }
    }
    return undefined;
  }

  keys() {
    if (!this.keyMap) return undefined;

    let keyList = new Set();
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        let dataArray = this.keyMap[i];
        for (let i = 0; i < dataArray.length; i++) {
          keyList.add(dataArray[i][0]);
        }
      }
    }
    return Array.from(keyList);
  }

  values() {
    if (!this.keyMap) return undefined;

    let keyList = new Set();
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        let dataArray = this.keyMap[i];
        for (let i = 0; i < dataArray.length; i++) {
          keyList.add(dataArray[i][1]);
        }
      }
    }
    return Array.from(keyList);
  }
}

const fruits = new HashTable(17);
fruits.set("red", "apple");
fruits.set("yellow", "banana");
fruits.set("pink", "banana");
fruits.set("orange", "orange");
fruits.set("green", "grapes");
fruits.set("black", "grapes");

fruits.keys().forEach((key) => {
  console.log(fruits.get(key));
});
