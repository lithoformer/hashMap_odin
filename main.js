import { HashMap } from "./app.js";

const test = new HashMap(47, .75);

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('hat', 'new color');

console.log(test.entries());

console.log(test.get('carrot'));

console.log(test.has('ice cream'));

test.set('moon', 'silver')

console.log(test.entries());

console.log(test.remove('moon'));

console.log(test.entries());

console.log(test.length());

console.log(test.keys());

console.log(test.values());

test.clear();

console.log(test.entries());