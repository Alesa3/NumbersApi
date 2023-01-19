const submitButton = document.querySelector("button") as HTMLButtonElement;
const displayFact = document.querySelector(".display-fact") as HTMLParagraphElement;
const yearInput = document.getElementById('year-input') as HTMLInputElement;

const url = "http://numbersapi.com/random/year?json";

async function getFacts() {
    const response = await fetch(url);
    const facts = await response.json();
    return facts;
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log("hello");
    if (yearInput.value.length > 0) {
        getFacts().then((facts) => {
            displayFact.innerHTML = facts.text;
        });

    }


});