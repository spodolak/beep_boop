var count = function(number) {
	var fullCount = "0";
	console.log(fullCount);
	for ( var index = 1; index <= number; index +=1)	{
		fullCount = (fullCount + ", " + index);
	};
	return fullCount;
};






$(document).ready(function()	{
	$("form#beep-boop-form").submit(function()	{
		event.preventDefault();

		var userNumber = $("input#numberIn").val();
		count(userNumber);
		
		

	});
});