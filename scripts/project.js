/* W06-Final Project: Programming Tasks */

/* Declare and initialize global variables */

const mealsElement = "https://run.mocky.io/v3/41134261-cb9f-4bb8-89b0-b8d0fe43f256";

let mealList = [];


/* async displayMeals Function */
const displayMeals = (meals) => {
    const mealsDiv = document.getElementById("meals");
    mealsDiv.innerHTML = "<ol>";
    meals.forEach((meal ) => {
        mealsDiv.innerHTML += `<${meal.Name}`;

        let article = document.createElement("article");
        let heading3 = document.createElement("h3");

        heading3.innerHTML = meal.mealName;

        var img = document.createElement("img");
        img.src = meal.imageUrl;
        img.alt = meal.description;

        article.appendChild(heading3);
        article.appendChild(img);

        mealsDiv.appendChild(article);

    });
    meals.innerHTML = "</ol>";
}


/* async getTemples Function using fetch()*/
 const getMeals = async() => {
    const url = "https://run.mocky.io/v3/41134261-cb9f-4bb8-89b0-b8d0fe43f256";

    const response = await fetch (url);
    const mealList = await response.json();
    displayMeals(mealList);
 }


/* reset Function */
function reset()
{
    mealsElement.innerHTML = "";
};

/* filterMeals Function */
const filterMeals = function(meals)
{
    reset();
    const filter = document.getElementById("filtered").value;

    switch (filter) {
        case "breakfast":
            displayMeals(meals.filter(meal => meal.mealType.toLowerCase() === "Breakfast"));
            break;

        case "Lunch": 
            displayMeals(meals.filter(meal => meal.mealType.toLowerCase() === "Lunch"));
            break;
        case "Dinner":
            displayMeals(meals.filter(meal => meal.mealType.toLowerCase() === "Dinner"));
        case "all":
        default:
            displayMeals(meals);
            break;

        

    }
    

}

getMeals();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterMeals(mealList)});
