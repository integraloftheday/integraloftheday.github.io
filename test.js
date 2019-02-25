var x = 0;
var days = 17916;
var id='1C6UCssrbFc0Ak9vfToVQTaKbwGi38r3fQzGhks3Pt_4';
var sheetrow=0;
function fun1(xval) {
	x = xval;
	//return sin(xval);
	return eval(equation);
}

function draw() {
	var canvas = document.getElementById("canvas");
	if (null == canvas || !canvas.getContext) return;
	var axes = {},
		ctx = canvas.getContext("2d");
	axes.x0 = .5 + .5 * canvas.width;
	axes.y0 = .5 + .5 * canvas.height;
	var max = 0;
	var min = 0;
	var iMax = Math.round(ctx.canvas.width / 2);
	var iMin = Math.round(0 - (ctx.canvas.width / 2));
	for (var i = iMin; i <= iMax; i++) {
		yy = fun1(i);
		if (yy > max) {
			max = yy;
			console.log("MAX: " + max);
		} else if (yy < min) {
			min = yy;
			console.log("MIN: " + min);
		}
	}
	var range = (max - min);
	console.log(range);
	var finalScale = 245 / range;
	if (finalScale <= 10) {
		finalScale = 10;
	}
	axes.scale = finalScale;
	console.log("final scale: " + finalScale)
	axes.doNegativeX = true;
	showAxes(ctx, axes);
	funGraph(ctx, axes, fun1, "rgb(5,178,50)", 2);
}

function funGraph(ctx, axes, func, color, thick) {
	var xx, yy, dx = 4,
		x0 = axes.x0,
		y0 = axes.y0,
		scale = axes.scale;
	var iMax = Math.round((ctx.canvas.width - x0) / dx);
	var iMin = axes.doNegativeX ? Math.round(-x0 / dx) : 0;
	ctx.beginPath();
	ctx.lineWidth = thick;
	ctx.strokeStyle = color;
	for (var i = iMin; i <= iMax;) {
		xx = dx * i;
		yy = scale * func(xx / scale);
		if (i == iMin) {
			ctx.moveTo(x0 + xx, y0 - yy);
		} else {
			ctx.lineTo(x0 + xx, y0 - yy);
		}
		i = i + 0.05;
	}
	ctx.stroke();
}

function showAxes(ctx, axes) {
	var x0 = axes.x0,
		w = ctx.canvas.width;
	var y0 = axes.y0,
		h = ctx.canvas.height;
	var xmin = axes.doNegativeX ? 0 : x0;
	ctx.beginPath();
	ctx.strokeStyle = "rgb(128,128,128)";
	ctx.moveTo(xmin, y0);
	ctx.lineTo(w, y0);
	ctx.moveTo(x0, 0);
	ctx.lineTo(x0, h);
	ctx.stroke();
}
var pi = Math.PI;

function exp(x) {
	return Math.E ** x;
}

function cos(x) {
	return Math.cos(x);
}

function sin(x) {
	return Math.sin(x);
}

function tan(x) {
	return Math.tan(x);
}

function sec(x) {
	return 1 / Math.cos(x);
}

function csc(x) {
	return 1 / Math.sin(x);
}

function cot(x) {
	return 1 / Math.tan(x);
}

function arcsin(x) {
	return Math.asin(x);
}

function arccos(x) {
	return Math.acos(x);
}

function arctan(x) {
	return Math.atan(x);
}
//cos, sin, tan, sec, csc, cot, arcsin, arccos, arctan

function add(){
    days=days+1;
    loadf();
}
function subtract(){
    days=days-1;
    loadf();
}

function append(sId,location,data){
	var url = "https://script.google.com/macros/s/AKfycbwOAqH-_qo7xEip_XuRwyegBz-VykU5GxcdgbgaMB9auzHdPrI/exec?theArg=['"+sId+"','"+location+"','"+data+"']";
	console.log(url);
	var wnd = window.open(url);
    wnd.close();
}
function display(){
	append('1J9s2YhV63nTZ-8hnPqnAjYukzjZSj6z3WJkR_1CVzZg','f'+(sheetrow).toString(),'1');
	//loadf();
}

function dontdisplay(){
	append('1J9s2YhV63nTZ-8hnPqnAjYukzjZSj6z3WJkR_1CVzZg','f'+(sheetrow).toString(),'0');
	//loadf();
}

function binarytobool(a){
	if(a==1){
		return(true);
	}
	else{
		return(false);
	}
}

function logintogoogle(google){
	if(google==false){
	var myWindow = window.open("./login.html", "Login", "width=500,height=500")
	}
	else{
		myWindow = window.open("https://script.google.com/macros/s/AKfycbwOAqH-_qo7xEip_XuRwyegBz-VykU5GxcdgbgaMB9auzHdPrI/exec", "Login", "width=500,height=500")
	}
}
var equation;
var Fullintegral;
var integral;
var Lintegral;
var Lequation;
var displayed; 

function loadf(){
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
var integralJson = $.getJSON({
	url: "https://spreadsheets.google.com/feeds/list/1J9s2YhV63nTZ-8hnPqnAjYukzjZSj6z3WJkR_1CVzZg/od6/public/values?alt=json",
	success: function(data) {
		var daysSinceBeginning = days;
		var date = new Date();
		var daysSinceEpoch = Math.floor(date / 8.64e7);
		var daysSinceBeginning = daysSinceEpoch - daysSinceBeginning;
		console.log("Day " + daysSinceBeginning);
		equation = data.feed.entry[daysSinceBeginning].gsx$equation.$t;
		integral = data.feed.entry[daysSinceBeginning].gsx$integral.$t;
		Lequation = data.feed.entry[daysSinceBeginning].gsx$lequation.$t;
		Lintegral = data.feed.entry[daysSinceBeginning].gsx$lintegral.$t;
		displayed = binarytobool(parseInt(data.feed.entry[daysSinceBeginning].gsx$display.$t));
		console.log(Fullintegral);
		console.log(Lequation);
		Fullintegral="$$\\\int{"+Lequation+"dx="+Lintegral+"}+c$$";
		if(daysSinceBeginning==17900){
			Fullintegral="$$\\\int{"+Lequation+"dx="+Lintegral+"}$$";
		}
		sheetrow=daysSinceBeginning+2;
		document.getElementById("sheetrow").innerHTML = "Is the Integral of day: "+sheetrow;
		document.getElementById("displayed").innerHTML= "Displayed: " +displayed; 
		document.getElementById("Fullintegral").innerHTML = Fullintegral;
		MathJax.Hub.Config({messageStyle: "none", showMathMenu: false});
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,Lequation]);

		var graph = document.getElementById('graph');
		draw();
	}
});
}