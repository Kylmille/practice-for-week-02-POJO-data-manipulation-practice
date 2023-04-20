const fruits = [        // large array of 31 different fruits
    {                       // each fruit represented by an object
        "genus": "Malus",
        "name": "Apple",
        "id": 6,
        "family": "Rosaceae",
        "order": "Rosales",
        "nutritions": {         // nested object contains nutrition information
            "carbohydrates": 11.4,
            "protein": 0.3,
            "fat": 0.4,
            "calories": 52,
            "sugar": 10.3
        }
    },
    // ...followed by 30 more fruit objects with the same structure
];

/**************DO NOT MODIFY THIS LINE BELOW*****************/
const fruits = require('../fruit-data')

/* 07. `addKeyAndValueToAll()` - Return the fruits array, adding the given key and
value to each fruit object

console.log(addKeyAndValueToAll(fruits, "inStock", true));
// returns array of 31 fruits, and each fruit object includes "inStock: true"
*/

function addKeyAndValueToAll(array, key, value) {
    const updatedFruits = fruits.map(fruit => {
        return {
          ...fruit,
          [key]: value
        };
      });
      return updatedFruits;
    }
 console.log(addKeyAndValueToAll(fruits, "inStock", true));

/* 08. `addKeyAndValueToOne()` - Return object at the given index array, adding the given key and
value to that fruit object

console.log(addKeyAndValueToOne(fruits, "color", "red", 1));
// returns first object ("Apple"), including "color: red"
*/

function addKeyAndValueToOne(array, key, value, index) {
    const updatedFruits = [...fruits];
    if (updatedFruits[index]) {
      updatedFruits[index] = {
        ...updatedFruits[index],
        [key]: value
      };
    }
    return updatedFruits;
  }

console.log(addKeyAndValueToOne(fruits, "color", "red", 1));
/* 09. `updateKeyName()` - Change the old key name to the new key name in all
objects, and return the resulting array.
HINT: Can you make a copy of the old key and value, and then delete the original?

console.log(updateKeyName(fruits, "nutritions", "nutrition"));
// returns fruits array, but every "nutritions" key had changed to "nutrition"
*/

function updateKeyName(array, oldKey, newKey) {
    const updatedFruits = fruits.map(fruit => {
        if (fruit.hasOwnProperty(oldKeyName)) {
          fruit[newKeyName] = fruit[oldKeyName];
          delete fruit[oldKeyName];
        }
        return fruit;
      });
      return updatedFruits;
}
console.log(updateKeyName(fruits, "nutritions", "nutrition"))
/* 10. `updateIdValues()` - Change all of the "id" values to six-character
strings, and return an array of all of the new id values.
For example: 1 becomes "000001", and 31 becomes "000031"

console.log(updateIdValues(fruits));
// returns a list of 31 id, in six-character string format:
// [ '000006', '000035', '000001', '000064', '000033', '000009', '000060',
    '000068', '000069', '000047', '000072', '000037', '000066', '000026',
    '000044', '000065', '000067', '000027', '000041', '000002', '000042',
    '000070', '000004', '000052', '000010', '000071', '000023', '000003',
    '000005', '000073', '000025' ];
*/

function updateIdValues(array) {
    const newIds = fruits.map((fruit) => {
        const idString = fruit.id.toString().padStart(6, "0");
        fruit.id = idString;
        return idString;
      });
      return newIds;
    }

    console.log(updateIdValues(fruits)
/* 11. `deleteKeysandValues()` - Delete the keyToDelete from the nutritions
object from every fruit, and return the array.

console.log(deleteKeysAndValues(fruits, "sugar"));
// returns fruits array, but every "nutritions" key no longer has a "sugar" key
*/

function deleteKeysAndValues(array, keyToDelete) {

    fruits.forEach(fruit => {
        if (fruit.nutritions && fruit.nutritions.hasOwnProperty(keyToDelete)) {
          delete fruit.nutritions[keyToDelete];
        }
      });
      return fruits;
}
console.log(deleteKeysAndValues(fruits, "sugar"));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ addKeyAndValueToAll, addKeyAndValueToOne, updateKeyName, updateIdValues, deleteKeysAndValues ];
