
const breedSelect = document.getElementById("breed-select");
const subBreedSelect = document.getElementById("sub-breed-select");

async function fetchBreedPosibilities() {
    const breedListUrl = "https://dog.ceo/api/breeds/list";

    try {
        // get response from api
        const response = await fetch(breedListUrl);


        if (!response.ok) {
            throw new Error("Response Status: " + response.status);
        }

        const json = await response.json();

        const breedList = json.message;

        for (const breed of json){
            const newOption = document.getElementById("option");
            newOption.text = breed;
            breedSelect.options.add(newOption, breed);
        }


    } catch (error) {
        console.error(error.message)
    }
}

fetchBreedPosibilities();