
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

async function fetchRandomDog() {
    let randomDogUrl = "https://dog.ceo/api/breeds/image/random";
    if (breedSelect.value == "any"){
        
        const imageSource = await fetchFromApi(randomDogUrl);

        dogImage.src = imageSource;
        
        
    } else {
        const randomDogUrl = "https://dog.ceo/api/breed/" +breedSelect.value + "/images/random";
        const imageSource = await fetchFromApi(randomDogUrl);

        dogImage.src = imageSource;
    }
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


fetchBreedPosibilities();

fetchRandomDog();