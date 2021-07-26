import { Classification, Type } from "./Enums";

export class Animal {
  constructor(
    readonly Name: string,
    readonly Class?: Classification,
    readonly Type?: Type,
    readonly Age?: number
  ) {}
  talk(text: string) {
    console.log(`[${this.Name}] ${text}`);
  }
}

export class Person {
  constructor(readonly Name: string, readonly Age?: number) {}
  talk(text: string) {
    console.log(`[${this.Name}] ${text}`);
  }
}
