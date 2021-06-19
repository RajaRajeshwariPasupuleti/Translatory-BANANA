//#region - execise 1

//  console.log("Script from app.js");

// var username = prompt("Give me the username");

// alert("alert box comes up and script works" + username);
//#endregion


// reference to btn or other input tags in javascript
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");

//callback function
function clickEventHandler()
{
    console.log("clicked");
    console.log("input value", txtInput.value);
}

//event listener
btnTranslate.addEventListener("click",  clickEventHandler)

