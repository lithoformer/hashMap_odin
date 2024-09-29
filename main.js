import { HashMap, HashSet } from "./app.js";

const test = new HashMap(16, .75);

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

for (const entry of test.data) {
    console.log(entry);
}

test.set('moon', 'silver')

console.log(test.entries());

console.log(test.remove('moon'));

console.log(test.entries());

console.log(test.data.length);

test.set('car', 'grey');
test.set('computer', 'black');
test.set('microphone', 'silver');

console.log(test.data.length);

console.log(test.keys());

console.log(test.values());

for (const entry of test.data) {
    console.log(entry);
}

test.clear();

console.log(test.entries());

const test2 = new HashSet(16, .75);

test2.set('apple')
test2.set('banana')
test2.set('carrot')
test2.set('dog')
test2.set('elephant')
test2.set('frog')
test2.set('grape')
test2.set('hat')
test2.set('ice cream')
test2.set('jacket')
test2.set('kite')
test2.set('lion')

test2.set('hat');

console.log(test2.entries());

console.log(test2.get('carrot'));

console.log(test2.has('ice cream'));

for (const entry of test2.data) {
    console.log(entry);
}

test2.set('moon')

console.log(test2.entries());

console.log(test2.remove('moon'));

console.log(test2.entries());

console.log(test2.data.length);

test2.set('car');
test2.set('computer');
test2.set('microphone');

console.log(test2.data.length);

console.log(test2.keys());

for (const entry of test2.data) {
    console.log(entry);
}

test2.clear();

console.log(test2.entries());