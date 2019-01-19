
	var integralJson = $.getJSON({
		url: "https://spreadsheets.google.com/feeds/list/1J9s2YhV63nTZ-8hnPqnAjYukzjZSj6z3WJkR_1CVzZg/od6/public/values?alt=json",
	success: function(data) {
		var daysSinceBeginning = 17915;
		var date = new Date();
		var daysSinceEpoch = Math.floor(date/8.64e7);
		var daysSinceBeginning = daysSinceEpoch - daysSinceBeginning;
		console.log(daysSinceBeginning + " Days since beginning of Integral of the Day");
		var integral = data.feed.entry[daysSinceBeginning].gsx$integral.$t;
		console.log(integral);
		document.getElementById("integral").innerHTML = integral;
	}
});
