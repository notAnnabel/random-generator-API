
const breedSelect = document.getElementById("breed-select");
const randomDogButton = document.getElementById("random-dog-button");

const subBreedSelect = document.getElementById("sub-breed-select");
const dogImage = document.getElementById("dog-image");



async function fetchBreedPosibilities() {
    const breedListUrl = "https://dog.ceo/api/breeds/list";

    const breedList = await fetchFromApi(breedListUrl);


    for (const breed of breedList) {
        const newOption = document.createElement("option");
        newOption.text = breed;
        breedSelect.options.add(newOption, breed);
    }
}


async function subBreedFetchPosibilities() {
    while (subBreedSelect.options.length >0) {
        subBreedSelect.remove(0);
    }
    // add first options
    // ========================================================
    const optionAny = document.createElement("option");
    optionAny.text = "any";
    subBreedSelect.options.add(optionAny, "any");
    // ========================================================
    
    if(breedSelect.value === "any") return;
    // putting subBreedList as a const then getting the api 

    const subBreedListUrl = "https://dog.ceo/api/breed/" +breedSelect.value +"/list";

    const subBreedList = await fetchFromApi(subBreedListUrl);


    for (const subBreed of subBreedList) {
        const newOption = document.createElement("option");
        newOption.text = subBreed;
        subBreedSelect.options.add(newOption, subBreed);
    }




}



async function fetchRandomDog() {
    let randomDogUrl = "https://dog.ceo/api/breeds/image/random";
    if (breedSelect.value !== "any"){
        randomDogUrl = "https://dog.ceo/api/breed/" +breedSelect.value + "/images/random";

        if (subBreedSelect.value !== "any"){
            randomDogUrl = "https://dog.ceo/api/breed/" + breedSelect.value + "/" +subBreedSelect.value + "/images/random";
        }
    }
        
        const imageSource = await fetchFromApi(randomDogUrl);
        
        currentImage = imageSource;
        dogImage.src = imageSource;
        

}


// fetch info from api 
async function fetchFromApi(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("reponse status: " + response.status);
        }

        const json = await response.json();

        return json.message;

    } catch(error) {
        console.log(error)
    }

}
// link buttons

randomDogButton.onclick = fetchRandomDog;

breedSelect.onchange = subBreedFetchPosibilities;

fetchBreedPosibilities();

fetchRandomDog();