/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Edwin Ewudzie";
let currentYear = new Date().getFullYear();
let profilePicture = "images/edd-pw.jpg";




/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");





/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture)




/* Step 5 - Array */
const favoriteFoods = ["Jollof rice", "Banku and Okro Soup","Fried rip plantain and beans stew", "Fufu and Palmnut soup"];

//display favorite food in array
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;
const favoriteFood2 = ["Gobe"];
favoriteFoods.push(favoriteFood2);
// display full content of array
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;

// remove first element 
favoriteFoods.shift(0);
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;

//remove last element in the favoriteFood arrry
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;





