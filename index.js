var names = "";
function dwarfRollCall(dwarves) {
  for(var i=0;i<dwarves.length;i++){
  names +=(i+1) + ". " + dwarves[(i)]+" ";
  }
  return names;
}
var upper =[];
function summonCaptainPlanet(planeteerCalls){
  for(var i=0;i<planeteerCalls.length;i++){
  upper[i]= planeteerCalls[i]+ "!";
  upper = upper.map(function(x){return x.toUpperCase()})
  }
  return upper;
}

function longPlaneteerCalls(words) {
  for(var i=0;i<words.length;i++){
    if(words[i].length > 4){
      return true;
    }
    if(words[i].length <=4){
      return false;
    }
  }
}

function findTheCheese (foods) {
  for(var i=0;i<foods.length;i++){
    if(foods[i] == "cheddar"){
      return "cheddar";
    }
    if(foods[i] == "gouda"){
      return "gouda";
    }
    if(foods[i] == "camembert"){
      return "camembert";
    }
  }
  return "no cheese!";
}
