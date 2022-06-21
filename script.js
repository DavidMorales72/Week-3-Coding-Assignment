// **********Question #1**********

let ages =[3, 9, 23, 64, 2, 8, 28, 93];

// created a function that will find the last element in the array.
function lastNumberInArray(x){
    let lastAge = x[x.length - 1];
   return lastAge;
}

// created a function that will get the first number in the array
function firstNumberInArray(x){
    let firstAge = x[0];
    return firstAge;
}

// created a function that will subtrac the first element from the last element in the array.
function math(x, y, z){
    let subtration = x(z) - y(z);
    return subtration;
}
console.log(math(lastNumberInArray,firstNumberInArray, ages));

// used .push to add this number to the ages array.
ages.push(150);

// ensured that the code is dynamic and will work eve if another element is added into the array.
console.log(math(lastNumberInArray, firstNumberInArray, ages));

//created a function to calculate the average age in the array.
function arrayAverage(x){
    let sumOfAges = 0;
    for(i = 0; i < x.length; i++){
        sumOfAges += x[i];
    }
    let averageAge = sumOfAges / x.length;
    return averageAge;
}
console.log(arrayAverage(ages));

// **********Question #2**********

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// created a function that will find the average number of letters for each name in the array.

function avergLettersInNames(x){
    let sum = 0;
    for(i = 0; i < x.length; i++){
        sum = sum + x[i].length;
}
    let averageLetters = sum / x.length;
    return averageLetters;
}
console.log(avergLettersInNames(names));

// created a function to concatinate every element in the array;
function namesConcat(x){
    for(i = 0; i < x.length; i++){
    let namesTogether = x.join(', ');
    return namesTogether;
}
}
console.log(namesConcat(names));


// ********** Question #3 **********

/* To access the last element in an array even if you do not know how long the array is
you can use "array[array.lenght - 1]" */


// ********** Question #4 **********

/* To access the first element in any array you can use "array[0]"*/


// ********** Question #5 **********

let nameLenghts = [names];

// created a loop to get the lenghts of each element in the names array.

for(i = 0; i < names.length; i++){
    nameLenghts[i] = names[i].length;
    console.log(nameLenghts);
}

// ********** Question #6 **********

// created a loop too add all of the elements in the nameLenghts array.

let sumOfNames = 0;
    for(i = 0; i < nameLenghts.length; i++){
        sumOfNames += nameLenghts[i];
    }
    console.log(sumOfNames);

// ********** Question #7 **********

// created a funtion that will return any given word any given amount of times.

function wordRepeated(word, n){
 
    let repeateWord = word;
    return word.repeat(n);
}
console.log(wordRepeated('Hello', 3));

// ********** Question #8 **********

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(fullName("David", "Morales"));

// ********** Question #9 **********

let arrayOf100 = [10, 90, 200];

// created a function that will check if the sum of the numbers in an array is greater than 100.

function isItGreaterThan100(x){
    let sumOfNumbers = 0;
    for(i = 0; i < x.length; i++){
        sumOfNumbers += x[i];
    }

    if(sumOfNumbers > 100)
    {
        return true;
    }else{
        return false;
    }
    
}
console.log(isItGreaterThan100(arrayOf100));

// ********** Question #10 **********

let arrayOfRandomNumbers = [5048, 4560, 5464, 8497];

// created a function to find the average of the number in an array.

function averageOfRandomNumbers(x){
    let sumOfRandomNumbers = 0;
    for(i = 0; i < x.length; i++){
        sumOfRandomNumbers += x[i];
    }
    let averageRandom = sumOfRandomNumbers / x.length;
    return averageRandom;
}
console.log(averageOfRandomNumbers(arrayOfRandomNumbers));

// ********** Question #11 **********

function averageOfTwoArrays(x, y){
    let sumOfX = 0;
    for(i = 0; i < x.length; i++){
        sumOfX += x[i];
    }
    let averageX = sumOfX / x.length;
    
    let sumOfY = 0;
    for(i = 0; i < x.length; i++){
        sumOfY += x[i];
    }
    let averageY = sumOfY / y.length;

    if(averageX > averageY){
        return true;
    }else{
        return false;
    }
}
console.log(averageOfTwoArrays(arrayOfRandomNumbers, ages));

// ********** Question #12 **********

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside === true &&  moneyInPocket > 10.50){
        return true;
    }else{
        return false;
    }
}
console.log(willBuyDrink(true, 12.60));

// ***** Question #13 **********

/*created a function that will check if someone liked Drake's new album, it will take a boolean and return an answer
depending if its true or not, I created it because there has been a debate discussing if its a good album or not.*/

function isDrakesNewAlbumGood(x){
    if(x === true){
        return "You're one of the few people that actually liked the album.";
    }else{
        return "Maybe you should give it another listen.";
    }
}
console.log(isDrakesNewAlbumGood(true));

