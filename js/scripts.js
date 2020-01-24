var findOneTwoThree = function (number) {
	var numberArray = number.split("");
	for (var index = 0; index <= (numberArray.length-1) ; index += 1) {
		console.log(numberArray[index]);
		if (numberArray[index] === "3") {
			console.log("Stop here! 3s ar most important");
		} else if (numberArray[index] === "2") {
			console.log("Stop here! 2's are only important half the time");
		} else if (numberArray[index] === "1") {
			console.log("STop here! unless you have a 3 or 2");
		} else {
			return;
		}
		};
	};





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
		findOneTwoThree(userNumber);
		var beepBoopCount = count(userNumber);
		$("#beepBoopCount").text(beepBoopCount);
		

	});
});