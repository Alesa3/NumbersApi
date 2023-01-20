"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const submitButton = document.querySelector("button");
const displayFact = document.querySelector(".display-fact");
const yearInput = document.getElementById('year-input');
const url = "http://numbersapi.com/";
function getFacts(year) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url + year + '/year' + '?json');
        const facts = yield response.json();
        return facts;
    });
}
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (yearInput.value.length > 0) {
        getFacts(yearInput.value).then((facts) => {
            displayFact.innerHTML = facts.text;
            yearInput.value = "";
        });
    }
});
