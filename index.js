/**
 * A function that generates a seeded random number of any length for any base
 * @param  {str or int} seed      the value used to seed the random number generator
 * @param  {[type]} length    how long the returned number should be
 * @param  {Number} [base=10] the base of the number ex 8 for oct or 16 for hex
 * @return {[type]}           [description]
 */
function random(seed,length,base=10){
  var result="";
  var rand = new Math.seedrandom(seed.toString());
  while(result.length<=length){
    result=result+(math.abs(rand.int32())).toString(base);
  }
  return(result.slice(0,length));
}


/**["(#)/(#)","(#)+(#)","(#)-(#)","(#)*(#)","#**#","cos(#)","sin(#)"
,"tan(#)","sec(#)","csc(#)","cot(#)","(#)/(#)","(#)+(#)","(#)-(#)","(#)*(#)"
,"#**#","x","x","x","x","x","x","exp(#)","pi",
"1","2","3","4","5","6","7","8","9","10"]**/

//23 possible parts

function eqParts(strValue){
switch(strValue){
  case "0":
    return("log(#)");
  case "1":
    return("1");
  case "2":
    return("2");
  case "3":
    return("3");
  case "4":
    return("4");
  case "5":
    return("5");
  case "6":
    return("6");
  case "7":
    return("7");
  case "8":
    return("8");
  case "9":
    return("9");
  case "a":
    return("(#)/(#)");
  case "b":
    return("(#)+(#)");
  case "c":
    return("(#)-(#)");
  case "d":
    return("(#)*(#)");
  case "e":
    return("(#)^(#)");
  case "f":
    return("sin(#)");
  case "g":
    return("cos(#)");
  case "h":
    return("tan(#)");
  case "i":
    return("csc(#)");
  case "j":
    return("sec(#)");
  case "k":
    return("cot(#)");
  case "l":
    return("pi");
  case "m":
    return("e"); 
  case "n":
    return("x");
  case "o":
    return("x");
  case "p":
    return("x");
  case "q":
    return("x");
  case "r":
    return("x");
  case "s":
    return("(#)/(#)");
  case "t":
    return("(#)+(#)");
  case "u":
    return("(#)-(#)");
  case "v":
    return("(#)*(#)");
  case "w":
    return("(#)^(#)");
  case "x":
    return("sqrt(#)"); 
  case "y":
    return("log(#,#)");
  case "z":
    return("x");

}
}

function eqBuild(seed){
  key=random(seed, 100, 36);
  var eq=eqParts(key[0]);
  for(i=1; i<key.length;i++){
    if(eq.includes("#")){
      eq=eq.replace("#",eqParts(key[i]));
    }
    else{
      return(eq);
    }
  }
}

function eqPicker(seed){
  while(true){
  eq=eqBuild(seed);
  d=math.derivative(eq,"x").toString();
  if(d.includes('x')){
    return([eq,d]);
  }
  else{
    seed=random(seed,100,36);
  }
  }
}


function texLoad(tex){
document.getElementById('integral').innerHTML = tex;
}

function texGen(seed){
  eqs=eqPicker(seed);
  tex= "$$ \\int" +math.parse(eqs[1]).toTex({parenthesis:'auto'})+"dx="+math.parse(eqs[0]).toTex({parenthesis:'auto'})+"+C $$";
  return(tex);
}
/** 
function graph(seed){
  const parser = math.parser();
  var eqs=eqPicker(seed);
  var eq=eqs[1];
  var xr=[];
  var yr=[];
  for(x=-5;x<5;x=x+.1){
    parser.set('x',x);
    yr.push(parser.evaluate(eq));
    xr.push(x);
  }
  return([xr,yr])
  }
  **/