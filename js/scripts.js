var replacementWord;
var replaceOneTwoThree = function (number) {
	var numberArray = number.split("");
	for (var index = 0; index <= (numberArray.length-1) ; index += 1) {
		if (numberArray[index] === "3") {
			return replacementWord = "'I'm sorry, Dave. I'm afraid I can't do that.'";
		} else if (numberArray[index] === "2") {
			return replacementWord = "'Boop!'";
		} else if (numberArray[index] === "1") {
			return replacementWord = "'Beep!'";
		} else {
		}
		};
	};



	// var findThree = function(number) {
	// 	var numberArray = number.split("");
	// 	console.log(numberArray);
	// 	numberArray.forEach(function(digit)	{
	// 		if (digit = "3") {
	// 			console.log("This string has a 3");
	// 		} else {
	// 			console.log("this is NOT a 3");
	// 		}
	// 	})
	// }



var replacement = "words?!*!"

var count = function(number) {
	var fullCount = "0";
	for ( var index = 1; index <= number; index +=1)	{
		if (index === 1 | index === 2 | index === 3) {
			fullCount = (fullCount + ", " + replacementWord);
		} else {
			fullCount = (fullCount + ", " + index);
		}
	};
	return fullCount;
};


$(document).ready(function()	{
	$("form#beep-boop-form").submit(function()	{
		event.preventDefault();

		var userNumber = $("input#numberIn").val();
		replaceOneTwoThree(userNumber);
		var beepBoopCount = count(userNumber);
		$("#beepBoopCount").text(beepBoopCount);
		
		

	});
});