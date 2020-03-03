$("body").on("click", "#man", function (e) {
	//.on the first is the event to look for, then the target you want, and then the function
	e.preventDefault();

	const url = $("#man").data("image");
	console.log(url);
	//listening for the click (test the whole event), running the function that makes update the url that it captures and change the image

	$("img").attr("src", url);
	//this targets the image tag and the attribute makes it target a specific element, in this case the source, it then changes it to the value within url
});

$("body").on("click", "#baby", function (e) {
	//.on the first is the event to look for, then the target you want, and then the function
	e.preventDefault();

	const url = $("#baby").data("image");
	console.log(url);
	//listening for the click (test the whole event), running the function that makes update the url that it captures and change the image

	$("img").attr("src", url);
	//this targets the image tag and the attribute makes it target a specific element, in this case the source, it then changes it to the value within url
});