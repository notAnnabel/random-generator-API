const addFavouriteButton = document.getElementById("favourite-dog");
const favouritesDiv = document.getElementById("favourites-div")

let currentImage = undefined;

let favouritesList = [];



function onAddFavouriteButtonClick(){
    if (favouritesList.includes(currentImage)) return;
    
    // add currently displayed image to favourite
    favouritesList.push(currentImage);

    const newDiv = document.createElement("div");
    newDiv.classList.add("container", "flex-column", "favourite-card")

    const newImage = document.createElement("img");
    newImage.src = currentImage;
    newImage.classList.add("favourite-img");
    
    const downloadButton = document.createElement("button");
    downloadButton.innerHTML = "Download"

    // append newDiv childs
    newDiv.append(newImage);
    newDiv.append(downloadButton);
    
    //append the child
    favouritesDiv.append(newImage);

    // append div to favourites div
    favouritesDiv.append(newDiv);

}

addFavouriteButton.onclick = onAddFavouriteButtonClick;