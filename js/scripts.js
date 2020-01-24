var count = function(number) {
	var fullCount = "0";
	console.log(fullCount);
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
		var beepBoopCount = count(userNumber);
		$("#beepBoopCount").text(beepBoopCount);
		

	});
});