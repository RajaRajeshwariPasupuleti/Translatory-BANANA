//#region - execise 1

//  console.log("Script from app.js");

// var username = prompt("Give me the username");

// alert("alert box comes up and script works" + username);
//#endregion


// reference to btn or other input tags in javascript
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output");



var url = "https://api.funtranslations.com/translate/minion.json";




function getTranslationURL(text){
    return url + "?" + "text=" + text
}


function catchError(error){
    console.log("error Occured " + error)
    // alert("Something went wrong with server, Please try again");
}


//callback function
function clickEventHandler()
{
    // outputDiv.innerText = "some appending text" + txtInput.value;


    var inputTxt = txtInput.value;

    //calling server for processing
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; // output
        console.log(json.contents.translated);
    })
     .catch(error => console.log(error))
    //.catch(catchError)   -> 2 way through function

}




//event listener
btnTranslate.addEventListener("click",  clickEventHandler)


