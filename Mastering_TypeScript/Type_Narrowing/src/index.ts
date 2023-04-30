function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

const el = document.querySelector("#someID");
if (el) {
  el;
} else {
  el;
}

const printLetters = (word?: string) => {
  if (word) {
    for (let letter of word) {
      console.log(letter);
    }
  } else {
    console.log("You didnot pass a word");
  }
};

//  Equality Narrowing
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    return x.toUpperCase();
  }
}
someDemo(2, "2");

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisode: number;
  episodeDuration: number;
}

function getRunTime(media: Movie | TVShow) {
  if ("numEpisode" in media) {
    return media.numEpisode * media.episodeDuration;
  }
  return media.duration;
}

console.log(getRunTime({ title: "Amadeus", duration: 140 }));
console.log(
  getRunTime({ title: "SpongeBob", numEpisode: 80, episodeDuration: 30 })
);

function printDate(date: string | Date): void {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(date);
  }
}

class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    console.log(entity.username);
  } else {
    console.log(entity.name);
  }
}

interface Cat {
  name: string;
  breed: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal;
    return "Meow";
  } else {
    animal;
    return "Woof";
  }
}

// Discriminated Unions
interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}
type FarmAnimal = Pig | Rooster | Cow | Sheep;
function getAnimalSound(animal: FarmAnimal): string {
  animal;
  switch (animal.kind) {
    case "pig":
      animal;
      return "onik!";
    case "rooster":
      animal;
      return "cudoucoook";
    case "cow":
      animal;
      return "mow!";
    case "sheep":
      animal;
      return "baah!";
    default:
      // We should never get here
      // const shouldNeverGetHere: never = animal;
      // return shouldNeverGetHere;
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};

console.log(getAnimalSound(stevie));
