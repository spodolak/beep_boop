//Business Logic

//Function takes numbers containing digits 1, 2 or 3 and replaces them with phrases, and prioitizes numbers with multiple significant digits in decending order (3>2>1).
var replaceOneTwoThree = function (number) {
	var numberString = number.toString();
	var numberArray = numberString.split("");
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
	var numberString = number.toString();
	var numberArray = numberString.split(""); 
	for (var index = 0; index <= (numberArray.length-1) ; index += 1)	{
		if (numberArray[index] === "3" | numberArray[index] === "2" | numberArray[index] === "1"){
			return true;
		} else {
		}
	};
};

//Function counts from zero up to the number value of the user input
var count = function(number) {
	var fullCount = "0";
	for ( var index = 1; index <= number; index +=1)	{
		if (findOneTwoThree(index) === true) {
			replacementWord = replaceOneTwoThree(index);
			fullCount = (fullCount + ", " + replacementWord)
		} else {
			fullCount = (fullCount + ", " + index);
		}		
	};
	return fullCount;
};

//User Interface Logic

$(document).ready(function()	{
	$("form#beep-boop-form").submit(function()	{
		event.preventDefault();
		var userNumber = parseInt($("input#numberIn").val());
		var beepBoopCount = count(userNumber);
		$("#beepBoopCount").text(beepBoopCount);
	});
});