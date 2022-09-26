//Allons-y les chiots
const pupsBaseUrl = ' http://localhost:3000/pups';

//on page load, work work work
document.addEventListener("DOMContentLoaded", () => {
    getAllPups();
});

function getAllPups(){
    fetch(pupsBaseUrl)
        .then(res => res.json())
        .then(pupsData => {
            console.log(pupsData);
            pupsData.forEach(pupData => renderdogBar(pupData));
        });
}

function renderdogBar(pup){
    let dogBar = document.getElementById('dog-bar');
    let span = document.createElement("span");
    span.id = pup.id;
    span.innerHTML = pup.name;

    dogBar.appendChild(span);
}