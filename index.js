
// Random Number Generation Between (1-6)


let randomNumber1 = Math.floor((Math.random()*6) + 1  );

// creation of randomdice image by concatination of strings

// output of the below statement will be something like-- dice1.png -- dice6.png

let randomDiceImage = "dice" + randomNumber1 + ".png" ;

// now we give the full path of the images folder

// now the output of the below statement is == images/dice1.png == images/dice6.png

let randomDiceSource = "images/" + randomDiceImage;

// Noe we have to select the attribute that we have to change

var randomDiceImg1 = document.querySelectorAll("img")[0];

// now changing the attribute

 randomDiceImg1.setAttribute("src",randomDiceSource );

// Now doing the same for the right image 


/*
var randomDiceImg2 = document.querySelectorAll("img")[1];

randomDiceImg2.setAttribute("src",randomDiceSource);


1- We cannot set the same variable as in this process the same random number will be generated on both the dices 

*/


// Now creating random number for image 2

let randomNumber2 = Math.floor(Math.random() *6 ) + 1;


//  now giving it the path by concatenation of strings

let randomDice2 = "dice" + randomNumber2 + ".png";

// now giving the full path to it

let randomDiceSource2 = "images/" + randomDice2 ;

// Now changing the attribute of the second image element


document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);



// now changing the title as per the winner of the game

// if player 1 wins 

if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerText = "Player 1 Wins";

}

// If palyer 2 wins

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins";

}

// If the Result is Draw 

else   {
    document.querySelector("h1").innerText = "Draw !";
}


// now editing the footer portion by changing the innertext

setInterval (() => {

let date = new  Date();

let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

let fullDate = date.getFullYear() + "-" + (date.getMonth() + 1)  + "-" + date.getDate() ;


document.querySelector("h3").innerHTML = "Created By Abhay Tomar ON : "    + fullDate + " --- " + time  ;


},1000);