// class Player {
//   readonly first: string;
//   public readonly last: string; // By deafault all are public
//   private score = 0;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     this.secretMethod();
//   }

//   private secretMethod(): void {
//     console.log("Nuclear Codes");
//   }
// }

// const elton = new Player("Elton", "Doe");
// elton.score = "addsa";
// elton.first = "sadasd";
// elton.secretMethod();

class Player {
  //   private score: number = 0;
  constructor(
    public first: string,
    public last: string,
    // private _score: number
    protected _score: number
  ) {}

  get fullname(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }

  private secretMethod(): void {
    console.log("Nuclear Codes");
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 999999;
  }
}

// const elton = new Player("Elton", "Shorthand", 0);
// console.log(elton.fullname);
// console.log(elton.score);
// elton.score = 1;
// console.log(elton.score);
// const ellie = new SuperPlayer("Ellie", "Berth", 0);
// ellie.maxScore();
// console.log(ellie);

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}
class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public color: string) {}
  print(): void {
    console.log(`${this.color} jacket`);
  }
}

const bike = new Bike("purple");
console.log(bike);

const redJaket = new Jacket("red");
console.log(redJaket);

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet(): void {
    console.log("Hello");
  }
}

class FullTimeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private salary: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTImeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private hoursWorked: number,
    private hourlyRate: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hoursWorked * this.hourlyRate;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 9500);
console.log(betty.getPay());

const billy = new PartTImeEmployee("Billy", "Doe", 24, 1100);
console.log(billy.getPay());
