// --In file: Person.ts

export class person {
    name: string;
    constructor (name: string){
        this.name = name;
    }

greet () {
    console.log(`Hello my Name is ${this.name}`);
}
}