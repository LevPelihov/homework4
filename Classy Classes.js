class Person {
    constructor(name, age) {
    this.info = `${name + 's'} age is ${age}`;
    }
  }
let john = new Person('john', 34);
console.log(john.info);