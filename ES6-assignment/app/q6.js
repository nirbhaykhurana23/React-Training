class Grandparent
{
  constructor(name,age)
  {
    this.name=name;
    this.age=age;
  }
  display()
  {
      return `Hello this is ${this.name} from grandparent class and my age is ${this.age}`;
  }
  static staticGrandParent()
  {
    console.log("This is grandparent class static function");
  }
}
class Parent extends Grandparent
{
  constructor(name,age)
  {
    super(name,age);
  }
  display()
  {
      return `Hello this is ${this.name} from parent class and my age is ${this.age}`;
  }
  static staticParent()
  {
    console.log("This is Parent class static function");
  }
}

class Child extends Parent
{
  constructor(name,age)
  {
    super(name,age);
  }
  display()
  {
      return `Hello this is ${this.name} from child class and my age is ${this.age}`;
  }
  static staticChild()
  {
    console.log("This is child class static function");
  }
}

export { Grandparent,Parent,Child };