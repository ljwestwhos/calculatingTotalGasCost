var totalCostDiv = document.body.querySelector("#totalCost");
var buttonDiv1 = document.body.querySelector("#clicker1");
var buttonDiv2 = document.body.querySelector("#clicker2");
var buttonDiv3 = document.body.querySelector("#clicker3");
var buttonDiv4 = document.body.querySelector("#clicker4");

var gasCost;
var milesDriven;
var milesPerGallon;
var totalCost; 

function totalGasCostFunction(gas, miles, mpg){
  var gasCost = Number(prompt(gas));
  var milesDriven = Number(prompt(miles));
  var milesPerGallon = mpg;
  
  totalCost = (milesDriven/milesPerGallon) * gasCost;

  totalCostDiv.innerHTML = "To drive a car with and MPG rating of " + milesPerGallon + " for " + milesDriven + " miles at $" + gasCost + " per gallon would cost $" + totalCost + "."; 
}

buttonDiv1.addEventListener("click", function(){
totalGasCostFunction("How much was gas for the first car?", "How many miles did you drive in the first car?", 12);
});

buttonDiv2.addEventListener("click", function(){
  totalGasCostFunction("How much was gas for the second car?", "How many miles did you drive in the second car?", 17);
});

buttonDiv3.addEventListener("click", function(){
  totalGasCostFunction("How much was gas for the third car?", "How many miles did you drive in the third car?", 26);
});

buttonDiv4.addEventListener("click", function(){
  totalGasCostFunction("How much was gas for the fourth car?", "How many miles did you drive in the fourth car?", 29);
});