var bttn = document.querySelector('#translate-button');
var txt = document.querySelector('#translate-input');
var op = document.querySelector('#translate-output');

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

bttn.addEventListener("click", function click() {
    inputText = txt.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            op.innerText = translatedText;
        })
        .catch(errorHandler)
})

