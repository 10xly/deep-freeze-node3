# deep-freeze-node3

Recursively `Object.freeze()` objects. **Super deep**

## Installation

`npm install deep-freeze-node3`

## Usage Example

```javascript
var freeze = require('deep-freeze-node3');

var person = {
    name: 'John',
    surname: 'Johnson',
    age: 26,
    address: {
        street: '1st Street',
        city: 'Los Angeles',
        country: 'USA'
    },
    vehicles: [
        'BMW',
        'Ferrari',
        'Lamborghini'
    ]
};

person = freeze(person);

person.name = 'Jack';
person.surname = 'Jackson';
person.nickname = 'JJ';
person.age = 18;
person.address.street = 'Third Street';
person.address.city = 'San Francisco';
person.address.country = 'USA';
person.vehicles[0] = 'Toyota';
delete person.vehicles[1]
delete person.vehicles[2]
person.occupation = 'Lawyer';

console.log(person.name);
console.log(person.surname);
console.log(person.nickname);
console.log(person.age);
console.log(person.address);
console.log(person.vehicles);
console.log(person.occupation);
```

***

```javascript
John
Johnson
undefined
26
{
    street: '1st Street',
    city: 'Los Angeles',
    country: 'USA'
}
[
    'BMW',
    'Ferrari',
    'Lamborghini'
]
undefined
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the MIT license.