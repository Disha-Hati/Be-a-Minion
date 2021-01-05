//Assignment 3 for Level Zero

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#tarea1");
var outputDiv = document.querySelector("#tarea2");


var serverURL = "https://api.funtranslations.com/translate/minion.json"   //api url


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);