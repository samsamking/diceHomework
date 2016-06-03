/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

1) get the button id
1) click the button generate one event
2) the event is to change classes for button1 and button2
3) generate new classes, they be randomly from dice-1, dice-2, dice-3, dice-4, doce-5, dice-6
4) get the dice images ids
5) according to the button id, change the id class to the class we got from 3)
6) button 1 needs to change class and button2 needs to change class



2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random1 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/


var buttonClicked=document.getElementById("roll-dice");
buttonClicked.onclick=onClickEvent;
function onClickEvent(){
	var random1 = Math.floor(Math.random() *6) +1;
	var random2 = Math.floor(Math.random() *6) +1;
	var class1= "dice-"+random1;
	var class2= "dice-"+random2;
	document.getElementById("first-die").className = class1;
	document.getElementById("second-die").className = class2;
};