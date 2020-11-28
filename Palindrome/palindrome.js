//variables
let answerPositive = document.getElementById("box-hit");    
let answerNegative = document.getElementById("box-error");
let inputText = document.getElementById("typeField");
let releaseButton = document.getElementById("buttonVerify");

//function when the user press enter wanting select the button
inputText.addEventListener("keyup", function(event){
    event.preventDefault();
    
    if(event.keyCode === 13){
        releaseButton.click();
    }
});

function verifyPalindrome(){
    let textInput = document.getElementById("typeField").value;
    let midText = textInput.length%2;
    let midPoint = textInput.length/2;
    let firStr;
    let secStr;
    let localPoint;

    if(midText == 0){
        firStr = textInput.slice(0, midPoint);
        secStr = textInput.slice(midPoint).split("").reverse().join("");

        if(firStr == secStr){
            alert("Yes! We have a palindrome!");
        }
        else if(firStr != secStr){
            alert("Is not a palindrome!");
        }
    }
    else if(midText != 0){
        localPoint = midPoint - 0.5;
        firStr = textInput.slice(0, localPoint);
        secStr = textInput.slice(localPoint + 1).split("").reverse().join("");
        
        if(firStr == secStr){
            alert("Yes! We have a palindrome!")
        }
        else if(firStr != secStr){
            alert("Is not a palindrome!");
        }
    }   
}