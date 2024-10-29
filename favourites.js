const addFavouriteButton = document.getElementById("favourite-dog");
const favouritesDiv = document.getElementById("favourites-div")

const downloadAllFavouritesButton = document.getElementById("download-all-favourites-button")

let currentImage = undefined;

let favouritesList = [];

async function downloadImage(imageSrc){
    // fetch image to get specific image information
    const image = await fetch(imageSrc)

    const imageBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "cuteDog.png"; //set download name

    // force download by clicking link event
    link.click();
}


function onAddFavouriteButtonClick(){
    if (favouritesList.includes(currentImage)) return;
    
    // add currently displayed image to favourite
    favouritesList.push(currentImage);

    const newDiv = document.createElement("div");
    newDiv.classList.add("container", "flex-column", "favourite-card");

    const newImage = document.createElement("img");
    newImage.src = currentImage;
    newImage.classList.add("favourite-img");
    
    const downloadButton = document.createElement("button");
    downloadButton.innerHTML = "Download"
    downloadButton.onclick = onDownloadClick;
    

    // append newDiv childs
    newDiv.append(newImage);
    newDiv.append(downloadButton);
    

    // append div to favourites div
    favouritesDiv.append(newDiv);

}

function onDownloadClick(event){
    const clickedButton = event.target;
    const parentDiv = clickedButton.closest("div");
    const imageElement = parentDiv.querySelector("img");

    downloadImage(imageElement.src);
}

function onDownloadAllClick(){
    for (const imageSrc of favouritesList){
        downloadImage(imageSrc);
    }
}

addFavouriteButton.onclick = onAddFavouriteButtonClick;
downloadAllFavouritesButton.onclick = onDownloadAllClick;