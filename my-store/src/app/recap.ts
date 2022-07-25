const userName: string | number = "Connie123";

const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 2);

class Person {

  constructor(public age: number, public lastName: string) {

  }
}

const nico = new Person(23, "Molina");
//nico.age;  no puede acceder desde afuera del objeto person

