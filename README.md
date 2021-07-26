# CatCreation
I made this to learn TypeScript, pretty useless but do whatever you want with it!

## Creating new pets
Go to the Animals.ts file, and add this code
```ts
export class PetName extends Animal {
  constructor(Name: string, Age?: number, Class?: Classification, Type?: Type) {
    super(Name, Class, Type, Age);
  }
}
```
### Yes, there is other animals. Why didnt I let you choose between them? Because cats are superior (in all seriousness, if you want to create another pet just change the code a bit)
