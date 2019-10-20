

//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Flower () {
    this.colour = `red`
}

Flower.prototype.thorns = function () {
    console.log(`I have sharp thorns and `+ this.colour +` petals`);
    
};

const tulip = new Flower();
tulip.thorns();


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

const myArray = [1,2,3,4,5,6,7,8,9,10];

myArray.slice(4,5);

//3. Delete the last number in the array that you created above.

myArray.pop();

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
/*Strawberries are a popular part of spring and summer diets throughout America. 
Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. 
They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste 
sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. 
There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.*/

var paragraph = `Strawberries are a popular part of spring and summer diets throughout America. 
Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. 
They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste 
sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. 
There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.`;

var strawberriesRegex = /strawberries/gi;
var strawberryRegexp = /strawberry/gi;

function fruits(str){
    return str.replace(strawberriesRegex,`bananas`).replace(strawberryRegexp,`banana`) 
}

fruits(paragraph);

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

const myFootballArray = [`Manchester United`, `Liverpool`, `Chelsea`, `Manchester City`];

var button = document.getElementById("changeArray")

button.addEventListener(
    'click',function(){
        myFootballArray.splice(0,5, `Mercedes`, `Audi`, `Volvo`,`Ford`);
    }
);

console.log(myFootballArray);

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.


const objectArray = [
    {name: `John`, age: 28},
    {name: `Mike`, age: 25},
    {name: `Luke`, age: 22},
];

const names = objectArray.filter(function(name){
    return(name.age === 25);
})

console.log(names);
 


//7. Create a simple function that logs the date.

const theDate = new Date();

console.log(theDate);
