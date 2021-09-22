var btInput = document.querySelector("#textInput");
var inputText = document.querySelector("#txtInput");
var outputText = document.querySelector("#txtOutput")

var serverUrl = "https://api.funtranslations.com/translate/morse.json"
function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text;
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! Try again later :(")
}
function clickHandler() {
    var data = inputText.value;
    fetch(getTranslationUrl(data))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler);

};
btInput.addEventListener("click", clickHandler)