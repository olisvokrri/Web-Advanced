//ARRAYS
//Data types ['', '', '']

var programmingLanguages = ['Javascript', 'PHP', 'Python'];

console.log(programmingLanguages)

console.log(programmingLanguages[0])
console.log(programmingLanguages[1])
console.log(programmingLanguages[2])

programmingLanguages.push('Java');
console.log(programmingLanguages)

programmingLanguages.pop();
console.log(programmingLanguages)

programmingLanguages.unshift('C#');
console.log(programmingLanguages)

programmingLanguages.shift();
console.log(programmingLanguages)

programmingLanguages.splice(0, 2, 'Ruby');
console.log(programmingLanguages)

console.log(Math.random()*5);
console.log(Math.floor(Math.random()*5));

var places = ["London","Paris","New york","Berlin"]

//destrukturimi

var [firstPlace, secondPlace,thirdPlace] = places;
console.log(thirdPlace);

var numbers = [1,2,3,4,5,6,7,8,9,10]

var [firstNumber,secondNumber, ...otherNumbers] = numbers;

console.log(firstNumber)
console.log(secondNumber)
console.log(otherNumbers.toString())


// Easy Challenge :

var favoriteMovies = ['Geek Charming', 'Lost Highway', 'The Notebook', 'Baby Driver', 'Wuthering Heights'];
console.log(favoriteMovies[1]);



// Medium Challenge :

var numbs = ["1", "2", "3", "4", "5"];

numbs.push('6');
numbs.shift();
numbs.splice(1, 1, "555");

console.log(numbs)



// Hard Challenge :

var fruits = ["kiwi", "apple", "banana", "pineapple", "watermelon"];

var randomIndex = Math.floor(Math.random() * fruits.length);

var [selectedFruit] = fruits.slice(randomIndex, randomIndex + 1);

console.log(selectedFruit);

