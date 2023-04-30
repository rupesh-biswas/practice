import { type Person } from "./types.js";

export default class Users implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} logs out`);
  }
}
