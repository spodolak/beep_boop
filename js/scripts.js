// var replacementWord;
// var replaceOneTwoThree = function (number) {
// 	var numberArray = number.split("");
// 	for (var index = 0; index <= (numberArray.length-1) ; index += 1) {
// 		if (numberArray[index] === "3") {
// 			return replacementWord = "'I'm sorry, Dave. I'm afraid I can't do that.'";
// 		} else if (numberArray[index] === "2") {
// 			return replacementWord = "'Boop!'";
// 		} else if (numberArray[index] === "1") {
// 			return replacementWord = "'Beep!'";
// 		} else {
// 		}
// 		};
// 	};

var findOneTwoThree = function(number) {
	strNumber = number.toString();
	console.log(strNumber);
	var numberArray = number.split(""); 
	for (var index = 0; index <= (numberArray.length-1) ; index += 1)	{
		if (numberArray[index] === "3" | numberArray[index] === "2" | numberArray[index] === "1"){
			// alert(true);
			return true;
		} else {
			// alert(false);
		}
	};
};

var count = function(number) {
	
	var fullCount = "0";
	for ( var index = 1; index <= number; index +=1)	{
		if (findOneTwoThree(number) === true) {
			fullCount = (fullCount + ", " + replacementWord)
		} else {
			fullCount = (fullCount + ", " + index);
		}		
		number = (number + 1);
	};
	return fullCount;
};


$(document).ready(function()	{
	$("form#beep-boop-form").submit(function()	{
		event.preventDefault();

		var userNumber = parseInt($("input#numberIn").val());

		var beepBoopCount = count(userNumber);
		$("#beepBoopCount").text(beepBoopCount);
	});
});