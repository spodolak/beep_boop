//Business Logic

//Function takes numbers containing digits 3, 2, or 1 in priority order and replaces them with phrases.
var replaceOneTwoThree = function (number) {
	var numberArray = number.toString().split("");
	for (var index = 0; index <= (numberArray.length-1) ; index += 1) {
		if (numberArray[index] === "3") {
			return "'I'm sorry, Dave. I'm afraid I can't do that.'";
		} else if ((numberArray[index] === "2") && (numberArray.indexOf("3") === -1)) {
			return "'Boop!'";
		} else if ((numberArray[index] === "1") && (numberArray.indexOf("3") === -1) && (numberArray.indexOf("2") === -1)) {
			return "'Beep!'";
		} else {
		}
	};
};

//Function searches each number of the count to see if it contains digits 1, 2, or 3.
var findOneTwoThree = function(number) {
	var numberArray = number.toString().split(""); 
	for (var index = 0; index <= (numberArray.length-1) ; index += 1)	{
		if (isNaN(number) === true)	{
			return true; 
		}	else if (numberArray[index] === "3" | numberArray[index] === "2" | numberArray[index] === "1")	{
			return true;
		} else { 
		}
	};
};

//Function searches each user input for non number characters.
var findNonNumbers = function(number)	{
	var numberArray = number.toString().split(""); 
	for (var index = 0; index <= (numberArray.length-1) ; index += 1) {
		if (isNaN(number) === true)	{
			return true; 
		} else {
		}
	};
};

//Function counts from zero up to the number value of the user input
var countToNumber = function(number) {
	var fullCount = "0";
	if (findNonNumbers(number) === true)	{
		alert("Hey! That's not a number!");
		return
	} else {
		for ( var index = 1; index <= number; index +=1) 	{
			if (findOneTwoThree(index) === true) {
				replacementWord = replaceOneTwoThree(index);
				fullCount = (fullCount + ", " + replacementWord)
			} else {
				fullCount = (fullCount + ", " + index);
			}		
		};
	}
	return fullCount;
};

//User Interface Logic

$(document).ready(function()	{
	$("form#beep-boop-form").submit(function()	{
		event.preventDefault();
		$("#beepBoopCount").text(countToNumber($("input#numberIn").val()));
	});
});