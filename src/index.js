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

    //listen to click event on span element
    span.addEventListener("click", showPupInfo);

    dogBar.appendChild(span);
}

function showPupInfo(event){
    console.log(event.target.id);
    let pup = {};
    //GET that pupperino
    fetch(`${pupsBaseUrl}/${event.target.id}`)
        .then(res => res.json())
        .then(pupObj => renderDogInfo(pupObj))
    
}

function renderDogInfo(pup){
    let dogInfoContainer = document.querySelector('#dog-info');
    dogInfoContainer.innerHTML = '';
    let img = document.createElement('img');
    img.src = pup.image;
    let h2 = document.createElement('h2');
    h2.innerText = pup.name;
    let button = document.createElement('button');

    button.innerText = pup.isGoodDog ? "Good Dog!" : "Bad Dog!";

    dogInfoContainer.append(img, h2, button);
}