// Instructions

// Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }
*/

var countCoins = document.getElementById("countCoins");
var currentCoins = prompt("How much money is in your pocket? Please enter amount in 0.00 format."); 


  var coinPurse = {
    quarters: 0, 
    dimes: 0, 
    nickels: 0, 
    pennies: 0};

  function coinCounter () {
  currentCoins *= 100;

  // Initialize a JavaScript object to hold the coins
  currentQuarters = currentCoins % 25;
  coinPurse.quarters = (currentCoins - currentQuarters) /25;

  currentDimes = currentQuarters % 10;
  coinPurse.dimes = (currentQuarters - currentDimes) /10;

  currentNickels = currentDimes % 5;
  coinPurse.nickels = (currentDimes - currentNickels) /5;

  currentPennies = currentNickels % 1; 
  coinPurse.pennies = (currentNickels - currentPennies);
}

coinCounter();


countCoins.innerHTML = "You currently have " + coinPurse.quarters + " quarters and " + coinPurse.dimes + " dimes and " + coinPurse.nickels + " nickels and " + coinPurse.pennies + " pennies.";


 


