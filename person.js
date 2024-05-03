"use strict";
// --In file: Person.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
class person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello my Name is ${this.name}`);
    }
}
exports.person = person;
