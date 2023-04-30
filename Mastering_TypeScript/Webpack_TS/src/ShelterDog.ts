import Dog from "./Dog";

export class ShelterDog extends Dog {
  constructor(
    public name: string,
    public breed: string,
    public age: number,
    public shelterName: string
  ) {
    super(name, breed, age);
  }
}
