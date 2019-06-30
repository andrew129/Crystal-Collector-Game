$(document).ready(function() {
let images = ["assets/images/jason-d-VKLJ-BJlszE-unsplash.jpg", "assets/images/jason-d-QvrVBfWajbo-unsplash.jpg", "assets/images/jason-d-JKRXPwUoFt0-unsplash.jpg", "assets/images/ilze-lucero-jLWLxX6i3R8-unsplash.jpg"];
//variables and empty arrays//
let wins = 0
let losses = 0
let currentScore = 0;
//generate random numbers//
let randomNumber = Math.floor((Math.random() * 120) + 19);
//references to html//
let winsText = $("#wins");
let lossesText = $("#losses");
let targetNumberText = $("#target-number");
let scoreText = $("#score");
//default text//
winsText.text("wins: " + wins);
lossesText.text("losses: " + losses);
scoreText.text("score: " + currentScore);
targetNumberText.text("winning number is: " + randomNumber);
//make working crystal buttons//
for (let i = 0; i < images.length; i++) {
    let imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-images");
    imageCrystal.attr("src", images[i]);
    imageCrystal.attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
    $("#crystals").append(imageCrystal);
}    
//onclick//
$(".crystal-images").on("click", function() {
    let crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    currentScore += crystalValue;
    $("#score").text("score: " + currentScore);

    if (currentScore === randomNumber) {
        reset()
        wins++;
        $("#wins").text("wins: " + wins);
        alert("winner");
    }

    else if(currentScore >= randomNumber) {
        reset()
        losses++;
        $("#losses").text("losses: " + losses);
        alert("loser");
    }
})

function reset() {
//generate random numbers//
randomNumber= Math.floor((Math.random() * 120) + 19);
//variables//
 currentScore = 0;
 scoreText.text("score: " + currentScore);
 targetNumberText.text("winning number is: " + randomNumber);
}})
