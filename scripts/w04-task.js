/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {name: "Edwin Ewudzie",
photo:"images/edd-pw.jpg",
favoriteFoods: ["Jollof rice", "Banku and Okro Soup","Fried rip plantain and beans stew", "Fufu and Palmnut soup"],
hobbies: ["Playing the Keyboard", "Watching Movies", "Playing table tennis", "reading"],

placesLived: [],
};



/* Populate Profile Object with placesLive objects */

    myProfile.placesLived.push(
    {
        place: "Accra, GA",
        length: "14 years"
    },
    ),
    myProfile.placesLived.push(
        
        {
            place: "Cape Coast, CR",
            length: "20 years"
        }
    ),
    myProfile.placesLived.push(
        {
            place: "Aba, Abia",
            length: "2 years"
        }
    )



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    let dl = document.querySelector("#places-lived");
    dl.appendChild(dt);
    dl.appendChild(dd);
});

