//Business Logic
var replacementWord = ""; 
var replaceOneTwoThree = function (number) {
	var numberString = number.toString();
	var numberArray = numberString.split("");
	for (var index = 0; index <= (numberArray.length-1) ; index += 1) {
		console.log(numberArray[index]);
		if (numberArray[index] === "3") {
			return "'I'm sorry, Dave. I'm afraid I can't do that.'";
		} else if (numberArray[index] === "2") {
			return replacementWord = "'Boop!'";
		} else if (numberArray[index] === "1") {
			return replacementWord = "'Beep!'";
		} else {
		}
	};
};
console.log(replacementWord);
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