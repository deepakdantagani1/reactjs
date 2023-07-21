
// -----------Imperative Code------------

/**we tell JavaScript exactly what to do and how to do it. Think of it as if we're giving JavaScript commands on exactly 
 * what steps it should take. For example, here is the humble for loop:

const people = ['Amanda', 'David', 'Andrew', 'Karen', 'Richard', 'Tyler'];
const excitedPeople = [];

for (let i = 0; i < people.length; i++) {
  excitedPeople[i] = people[i] + '!';
} */


// ---------------Declarative Code----------
/**
 * With the imperative code we were performing all of the steps to get to the end result. 
 * What is the end result that we actually want, though? Well, our starting point was just an array of names:

const people = ['Amanda', 'David', 'Andrew', 'Karen', 'Richard', 'Tyler'];
The end goal that we want is an array of the same names but where each name ends with an exclamation mark:

["Amanda!", "David!", "Andrew!", "Karen!", "Richard!", "Tyler!"]
To get us from the starting point to the end, we'll just use JavaScript's .map() function to declare what we want done.

const excitedPeople = people.map((name) => name + "!");
 */

