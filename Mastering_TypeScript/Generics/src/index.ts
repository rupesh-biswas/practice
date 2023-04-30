const nums: Array<number> = [];
const strings: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// const inputEl = document.querySelector("#username") as HTMLInputElement;
console.log(inputEl.value);
inputEl.value = "Hacked";
console.log(inputEl.value);

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

function numIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function boolIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any {
//   return item; //It can accept an number and return a string but we to return same type
// }

function identity<T>(item: T): T {
  return item;
}

identity<number>(7);
identity<string>("sadsad");

interface Cat {
  name: String;
  breed: String;
}
// identity<Cat>()

function getRandomElement<T>(list: T[]): T {
  const randInx = Math.floor(Math.random() * list.length);
  return list[randInx];
}
console.log(getRandomElement<string>(["a", "b", "c"]));
console.log(getRandomElement<number>([1, 2, 3, 4, 5, 6, 7]));

function merge<T extends object, U extends object, V extends object>(
  object1: T,
  object2: U,
  object3: V
) {
  return {
    ...object1,
    ...object2,
    ...object3,
  };
}
const myCat = merge(
  { name: "Candy" },
  { breed: "meow", age: 4 },
  { likes: ["fish", "milk"] }
);
console.log(myCat);

interface Lengthy {
  len: number;
}

// function printDoubleLength<T extends Lengthy>(thing: T): number {
//   return thing.len * 2;
// }

function printDoubleLength(thing: Lengthy): number {
  return thing.len * 2;
}

function makeEmptyArray<T = number>(): T[] {
  return [];
}

// const nums2 = makeEmptyArray<string>();
const nums2 = makeEmptyArray();

interface Song {
  name: string;
  artist: string;
  streams: number;
}

interface Video {
  name: string;
  creator: string;
  views: number;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
songs.add();

const videos = new Playlist<Video>();
videos.add();
