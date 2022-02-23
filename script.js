//library of national parks 
// 5 functions 
var url = "https://raw.githubusercontent.com/lucyweir/NationalParksDataLibrary-/main/US%20National%20Parks.csv"; 

const parkName = getColumn(url, 1);
const parkLocation = getColumn(url, 3);
const parkDate = getColumn(url, 4);
const parkSize = getColumn(url, 5);
const parkVisitors = getColumn(url, 6);

//parameter state name returns parks in the state 
//Function uses a state parameter and finds national parks in the state parameter
function getPark(state) {
var matchingParks = [ ];
//Lets the user type in lower case or upper case and the program still finds parks 
state=state.toLowerCase();
for (var i in parkName){
  if(parkLocation[i].toLowerCase() == state) {
  matchingParks.push(parkName[i]);
  }
}
if(matchingParks.length > 0 ){
return(matchingParks);
}
else{
  return ("There are no parks in selected state")
}
//If there are no national parks in the state written the result is there are no parks in the selected state 
}
console.log(getPark("South carolina"));
//matching national parks in the state put in will be returned... for ex. the state maine returns Acadia as a matching park



  function findStatesWithPark (park) {
  var matchingStates = [];
  park=park.toLowerCase();
  for (var i in parkLocation){
   if(parkName[i].toLowerCase() == park) {
  matchingStates.push(parkName[i]);
  }
  }
  if (parks[i].includes(park)) {
  matchingStates.push(parkLocation[i])
  return(matchingStates);
  }
  
}

console.log(findStatesWithParks("Biscayne"))













//Utils file 
function getColumn(url, columnNumber){
var column = [];
var table = [];
var request = new XMLHttpRequest();
request.open("GET", url, false);
request.send(null);
var csvData = new Array();
var jsonObject = request.responseText.split(/\r?\n|\r/);
for (var i = 0; i < jsonObject.length; i++) {
csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
}
table = csvData;
column = getCol(table, columnNumber);
return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
    var column = [];
    for(var i=1; i<matrix.length-1; i++){
        column.push(matrix[i][col]);
    }
    return column;
}