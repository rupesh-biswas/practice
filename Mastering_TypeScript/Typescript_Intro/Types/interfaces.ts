interface Point {
  x: number;
  y: number;
}
const pt: Point = { x: 123, y: 23 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  //   sayHi: () => string;
  sayHi(): string;
}
const thomas: Person = {
  id: 123,
  first: "Thomas",
  last: "Hardy",
  //   nickname: "TOm",
  sayHi: () => {
    return "Hello!";
  },
};

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Nike",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}
const myDog: Dog = {
  name: "Elton",
  age: 7,
  breed: "pompoliean",
  bark() {
    return "Woof! Woof!";
  },
};

interface ServiceDog extends Dog {
  job: "guide dog" | "PTSD dog" | "bomb locator" | "drug locator";
}

const eliot: ServiceDog = {
  name: "Eliot",
  age: 2,
  breed: "labro",
  bark() {
    return "Bow! Bow!";
  },
  job: "bomb locator",
};

interface Human {
  name: string;
  email: string;
}

interface Employee {
  readonly id: number;
}

interface Engineer extends Human, Employee {
  level: "L1" | "L2" | "L3" | "L4" | "L5";
  languaguesKnown: string[];
}

const ellen: Engineer = {
  id: 1232,
  name: "Ellon",
  email: "ellon@company.com",
  level: "L3",
  languaguesKnown: ["Python", "JS"],
};

// Below type lines gives error
// type Chicken{
//   breed: string
// }
// type Chicken {
//   eggs:number
// }

interface ChickenI {
  breed: string;
}
interface ChickenI {
  eggs: number;
}
