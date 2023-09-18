// Chapter # 17 Arrays and Loop
// Q#1

var a = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var b=0;b < a.length;b++){
    for(var c=0;c<4;c++){
        document.write(a[b][c]+" ");
    }
    document.write("<br>")
}

// Q#2
for(var i=1;i<=10;i++){
document.write("<br>" + i)
}

// Q#3
var mul = +prompt("Enter a table");
var ind = +prompt("Enter a index");
for(var i=1 ; i<=ind; i++){
    document.write("<br>" +mul+ "*"+ i + "="+  mul*i )
}

// Q#4
var fruits = ["apple","banana","orange","grapes","strawberry"];
document.write("<br>"+fruits)
for(var m=0 ; m<fruits.length;m++){
    document.write("<br> Element at index "+ " " +m + " " +" is " +fruits[m])
}

// Q#5a
document.write("<br>Counting :<br> ");
for(var e=1;e<=15;e++){
    document.write(e )
}

// Q#5b
document.write("<br>Reverse Counting :<br> ");
 for(var f=10;f>0;f--){
    document.write(f)
}

// Q#5c
document.write("<br>Even number :<br> ");
    for(var g=0;g<=20;g=g+2){
        document.write(g )
}

// Q#5d
document.write("<br>Odd number :<br> ");

    for(var h=1;h<=20;h=h+2){
        document.write(h )
}
// Q#5e
document.write("<br>Series :<br> ");

    for(var j=2;j<=20;j=j+2){
        document.write(j +"k")
    }


  
 
// Q#6    

// Define the array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Get user input
var item = prompt("Enter the name of the item you are looking for: ");

// Check if the item exists in the array
var index = A.indexOf(item);
if (index !== -1) {
    alert(item + " is available at index " + index +" "+ "in our bakery");
} else {
    alert(item + " is not available in our bakery.");
}

// Q#7

var arr = [24,53,78,91,12];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
if (arr[i] > largest ) {
largest = arr[i];
}
}
console.log("The largest number in the array is",largest);


// Q#8

// Define the array
var A = [24, 53, 78, 91, 12];

// Find the smallest number in the array
var smallest = Math.min(...A);

console.log("The smallest number in the array is", smallest);

// Q#9
// Print multiples of 5 ranging from 1 to 100
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write("<br>"+i);
    }
}


// Chapter # 17 (for loop)
for(var i = 0; i<=10;i++){
    document.write("<br>"+i)

}
// Q#2
for (let i = 0; i <= 12; i++) {
}

// Q#3
for (var i = 0; i <= 4; i++) {
}
// Q#4
for (let counter = 0; counter < 100; counter++) {
}
// Q#5
for (let i = 3; i > 0; i--) {
}
// Q#6
let array = [1, 2, 3, 4, 5];
let numOfElements = array.length;

// Q#7
let flag = true;

// Q#8
var pets = ["cat","lion","tiger"];
for (let i = 0; i < pets.length; i++) {
}
// Q#9
for (let i = 0; i < 10; i++) {
    if (i === 1) {
        alert(i);
        break;
    }
}
// Q#10
// Create an array of user names
let userNames = ["Alice", "Bob", "Charlie", "Dave"];

// Prompt the user to enter a first name
let firstName = prompt("Enter first name");

// Loop through the array and check if the entered name is in the array
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === firstName) {
        alert("Enter");
        break;
    } else if (i === userNames.length - 1) {
        alert("Please write correct user name");
    }
}
// Q#11
var list = ["ali","akram"];
var userInput = prompt("enter user name");
var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}
if (!matchFound) {
    alert("No match found");
}

// Q#12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        var result = firstArr[i] + secondArr[j];
        document.write(result);
    }
}
