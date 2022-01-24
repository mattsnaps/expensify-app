console.log("Runnning?");

//Object Destructuring

const person = {
    name: 'Matthew',
    age: '31',
    location: {
        city: 'Monroe',
        temperature: 16
    }
};

const { name = 'Anonymous', age } = person;
console.log(`${name} is ${age}.`);

const { city, temperature: temp } = person.location;
console.log(`It's ${temp} in ${city}.`);


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
};

const { name : publisherName = 'self-published' } = book.publisher;

console.log(publisherName);

//Array Destructuring

const address = ['1021 24th Street', 'Monroe', 'Wisconsin', '53566'];

//Can use all of the variables and set a default value.
const [street, town, state = 'New York', zipcode] = address;
//Can skip some of the variables.
const [, village, st] = address
console.log(`You are in ${town} ${state} zipcode is ${zipcode}`);
console.log(`${village} and ${st}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drinkType, , mPrice] = item;

console.log(`A ${drinkType} cost ${mPrice}`);
