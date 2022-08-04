
fruits = ["apple", "banana", "watermelon", "grape", "orange"]


var x = fruits.length
console.log("length " + x)
// Printing Fruits
console.log(fruits);

x = 0;
while (x < fruits.length) {
    console.log(fruits[x]);



    // *Changing Fruits Elements.
    if (fruits[x] == "grape") {
        console.log(fruits[x] + " indexNumber:- " + fruits.indexOf(fruits[x]))
    }
    x += 1;

}

console.log(fruits);