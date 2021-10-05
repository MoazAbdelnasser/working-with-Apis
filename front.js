/**
 * let baseUrl="https://api.nasa.gov/planetary/apod?api_key=";
 * let apiKey = "4EpzUybBb3KOAVKlmKEvh9HP8L3itxKaGb9Btv7p";
 * 
 */
let baseUrl="https://api.nasa.gov/planetary/apod?=";
let apiKey = "api_key=4EpzUybBb3KOAVKlmKEvh9HP8L3itxKaGb9Btv7p";

//Get the value inside input
let newAnimal = document.getElementById("animal").value;

//Then we will add an Event listener for cliking of the button GO/Generate
document.getElementById('generate').addEventListener('click',performAction);

function performAction(e){
    getAnimalData(baseUrl);
};

//Let's now create the function that will deal with our API
let getAnimalData = async (baseUrl)=>{

    const res = await fetch(baseUrl);
    //Now let's try to make action on the comming data
    try{
        const data = res.json();
        console.log(data);
        document.getElementById("animalName").innerText = data.promise.name;
        //return data;
        
    }
    catch(error){
        console.error(error);
    }


};