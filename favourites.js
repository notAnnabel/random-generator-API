const addFavouriteButton = document.getElementById("favourite-dog");
const favouritesDiv = document.getElementById("favourites-div")

let currentImage = undefined;

function onAddFavouriteButtonClick(){
    const newImage = document.createElement("img");
    newImage.src = currentImage;
    newImage.classList.add("favourite-img")

    favouritesDiv.append(newImage);
}

addFavouriteButton.onclick = onAddFavouriteButtonClick;