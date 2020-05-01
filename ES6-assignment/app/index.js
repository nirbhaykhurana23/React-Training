import { q1 } from './q1'
import { list, flexBoxArray, arrayTime, arraySecond, totalTime } from './q2'
import { output } from './q3'
import { user } from './q4'
import { Grandparent,Parent,Child } from './q6';
import { q7 } from './q7'
import {areaCircle,areaCylinder,areaRectangle} from './q8';
import { q9 } from './q9'
import { LinkedList } from './q11'
import { StackUsingLinkedList } from './q13'

//q1
let numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
q1(numbers);

//q2
console.log(list);
console.log(flexBoxArray);
console.log(arrayTime);
console.log(arraySecond);
console.log(totalTime);

// q5 skipped because contain generators(asked to skip generator module)

//q6
let c=new Child("child","24");
console.log(c.display());
Child.staticChild();

let p= new Parent("parent", "50");
console.log(p.display());
Parent.staticParent();

let g= new Grandparent("grand parent", "80");
console.log(g.display());
Grandparent.staticGrandParent();

//q7
console.log(q7.addition(1,2));
console.log(q7.subtraction(5, 1));
console.log(q7.multiplication(5, 5));
console.log(q7.division(20, 4));

//q8 
console.log(areaCircle(5));
console.log(areaRectangle(6, 10));
console.log(areaCylinder(5, 10));

//q9
let duplicateArray = [7,9,10,9,7,3,6,2,1,2,3,6];
console.log(q9(duplicateArray));

//q10
let nestedArray=["one",["two",2],"three",["four",4]];
let flatArrays = nestedArray.reduce((a, b) => a.concat(b), []);
console.log(`flattened array = ${flatArrays}`);

//q11
let linked_list=new LinkedList();
linked_list.addFirst(1);
linked_list.addFirst(5);
linked_list.addLast(8);
linked_list.addFirst(9);
linked_list.addLast(3);

console.log("Link list",linked_list);
console.log("First element",linked_list.getFirst());
console.log("Last element",linked_list.getLast());
console.log("Length of linked list",linked_list.lengthOfList());

//q12
let set1 = new Set([1,7,2,8,3,4,6,5,6,1]);
set1.add(10);
set1.delete(3);
console.log(set1);
for (let elements of set1.values()) {
    console.log(elements);
}

let map1 = new Map();
map1.set("key1","value1");
map1.set("key2","value2");
map1.set("key3","value3");
console.log(map1);
for (let [key, value] of map1.entries()) {
    console.log(`${key} points to ${value}`);
}
 
//q13
let stack= new StackUsingLinkedList();
stack.push(2);
stack.push(4);
stack.push(9);
stack.pop();
stack.push(5);

console.log("Stack", stack);
console.log("Top element", stack.peek());
console.log("Length of stack", stack.length());


