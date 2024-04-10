/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    const templesDiv = document.getElementById("temples");
    templesDiv.innerHTML = "<ol>";
    temples.forEach((temple ) => {
        //templesDiv.innerHTML += `${temple.templeName}`;

        let article = document.createElement("article");
        let heading3 = document.createElement("h3");

        heading3.innerHTML = temple.templeName;

        var img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(heading3);
        article.appendChild(img);

        templesDiv.appendChild(article);

    });
    temples.innerHTML = "</ol>";
}


/* async getTemples Function using fetch()*/
 const getTemples = async() => {
    const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

    const response = await fetch (url);
    const templeList = await response.json();
    displayTemples(templeList);
 }


/* reset Function */
function reset()
{
    templesElement.innerHTML = "";
}

/* filterTemples Function */
const filterTemples = function(temples)
{
    reset();
    const filter = document.getElementById("filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.toLowerCase().location("Utah")));
            break;

        case "notutah": 
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().location("notutah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated.Date < (1950, 0, 1))));
        case "all":
        default:
            displayTemples(temples);
            break;

        

    }

}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});
