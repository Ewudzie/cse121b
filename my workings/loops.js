myinfo = {
    name: "Brother Edd",
    //photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myinfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myinfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myinfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-food").appendChild(favoriteFood4);

// creating a for loop function
const foodsElement = document.querySelector("#favorite-foods");

function createAndAppendFavoriteFoodItem(food){
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);

}
myInfo.favoriteFoods.forEach(createAndAppenFavoriteFoodItem);

// creating for loop using .map
const foodsElementmap = document.querySelector("#favorite-foods");
function mapFoodItem(food){
    let favoriteFoodmap = document.createElement("li");
    favoriteFoodmap.textContent = food;
    return favoriteFoodmap;
}

/*
    arrow functions
    with parenthensis
    const square = (num) =>{
        return num * num;
    }
    //without parenthensis
    const squre = num =>{
        return num * num
    }
    //implicit return - one liner
    const square = num => num * num;

    callback is to call a function into another function

    Ex1:
    const nums = [1,2,3,4,5]
    num.forEach(num => console.log(num * num));

    Ex2:
    const nums = [1,2,3,4,5,6]
    const squareNums = nums.map(num => num * num);
    console.log(squareNums);

    ex3:
    const nums = [11,2,3,4,5,6,7,8,10];
    const partyList = nums.map(num => (num % 2 === 0: ? 0: 1));
    console.log(partyList);

    const salary = employees.find(moreSalary => (moreSalary > 20000));
    console.log(`$"$"salary`); or
    const salary = employees.find(s => s.sal >= 20000);





*/