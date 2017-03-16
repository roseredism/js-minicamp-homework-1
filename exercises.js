//Do not change any of the function names

function multiplyByTen(num) {
  var product = num * 10;
  return product;
  //return num after multiplying it by ten
  //code here
}

function subtractFive(num) {
  //return num after subtracting five
  //code here
  var testi = num - 5;
  return testi;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  //code here
  var str1Length = str1.length;
  var str2Length = str2.length;
  if (str1Length === str2Length){
	return true;
  }
  return false;
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here
  if(x == y){
	return true;
  }
  return false;
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here
  if(num < 90) {
	return true;
  }
  return false;
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here
  if (num > 50) {
	return true;
  }
  return false;
}

function add(x, y) {
  //add x and y together and return the value
  //code here
  var number = x + y;
  return number;
}

function subtract(x, y) {
  //subtract y from x and return the value
  //code here
  var number = x-y;
  return number;
}

function divide(x, y) {
  //divide x by y and return the value
  //code here
  var num = x/y;
  return num;
}

function multiply(x, y) {
  //multiply x by y and return the value
  //code here
  var num = x*y;
  return num;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here
  var num = x%y;
  return num;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here
 if (num % 2 == 0){
	return true;
	}
	return false;
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here
  if (num % 2 !== 0){
	return true;
  }
  return false;
}

function square(num) {
  //square num and return the new value
  //code here
  var nelio = Math.pow(num, 2);
  return nelio;
}

function cube(num) {
  //cube num and return the new value
  //code here
  var kuutio = Math.pow(num, 3);
  return kuutio;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
  var vastaus = Math.pow(num, exponent);
  return vastaus;
}

function roundNumber(num) {
  //round num and return it
  //code here
  var rounded = Math.round(num);
  return rounded;
}

function roundUp(num) {
  //round num up and return it
  //code here
  var rounded = Math.ceil(num);
  return rounded;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
  var hello = str + '!';
  return hello;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
  var terve = 'Hello' + ' ' + name + '!';
  return terve;
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  var ala = length * width;
  return ala;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
  var ala = base * height / 2;
  return ala;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code her
  
  return Math.round (Math.PI * Math.pow( radius ,2 ));
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
  var alue = length*width*height;
  return alue;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
