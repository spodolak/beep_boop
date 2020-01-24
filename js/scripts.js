var replaceOneTwoThree = function (number) {
	var numberArray = number.split("");
	for (var index = 0; index <= (numberArray.length-1) ; index += 1) {
		if (numberArray[index] === "3") {
			return "3";
		} else if (numberArray[index] === "2") {
			numberArray.forEach(function(digit)	{
				if (digit === "3") {
					console.log("I found a 3");
					return "3";
				} else {
					console.log("I found a 2");
					return "2";
				}
			});
		} else if (numberArray[index] === "1") {
		} else {
		}
		};
	};

	var findThree = function(number) {
		var numberArray = number.split("");
		console.log(numberArray);
		numberArray.forEach(function(digit)	{
			if (digit = "3") {
				console.log("This string has a 3");
			} else {
				console.log("this is NOT a 3");
			}
		})
	}




var count = function(number) {
	var fullCount = "0";
	for ( var index = 1; index <= number; index +=1)	{
		if (index === 1) {
			fullCount = (fullCount + ", " + "'Beep!'");
		} else if (index === 2) {
			fullCount = (fullCount + ", " + "'Boop!'");
		} else if (index === 3) {
			fullCount = (fullCount + ", " + "'I'm sorry, Dave. I'm afraid I can't do that.'");
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
		findThree(userNumber);
		var beepBoopCount = count(userNumber);
		$("#beepBoopCount").text(beepBoopCount);
		

	});
});