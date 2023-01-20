const submitButton = document.querySelector("button") as HTMLButtonElement;
const displayFact = document.querySelector(".display-fact") as HTMLParagraphElement;
const yearInput = document.getElementById('year-input') as HTMLInputElement;

const url = "https://numbersapi.com/";

async function getFacts(year: string) {
    const response = await fetch(url + year + '/year' + '?json');
    // console.log(url + year + '/year');
    const facts = await response.json();
    return facts;
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log("hello");

    if (yearInput.value.length > 0) {
        getFacts(yearInput.value).then((facts) => {
            displayFact.innerHTML = facts.text;

            yearInput.value = "";
        });

    }


});
