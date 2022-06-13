let reg1 = new RegExp("abc");
let reg2 = /abc/;

//Test -> substring
console.log("1", reg1.test("kbjabcihek"));
console.log("2",/[0123456789]/.test("in 1992"));
console.log("3", /[03456789]/.test("in 1992")); //Do they share any numbers?

// \d Any digit character -> [0-9]
// \w An alphanumeric character (“word character”) [a-z]
// \s Any whitespace character (space, tab, newline, and similar)
// \D A character that is not a digit
// \W A nonalphanumeric character
// \S A nonwhitespace character
// . any character except newline

//Example
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/; //NOTE [\d.] inside the bracket '.' loses its special meaning

//Specifying a specific number of occurences
let dateTimeOccur = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/; 
console.log("4", dateTimeOccur.test("1-30-2003 8:45"));

console.log("5", dateTime.test("01-30-2003 15:20"));
console.log("6", dateTime.test("30-jan-2003 15:20"));

let notBinary = /[^01]/;  //^ -> Match anything except what follows ^
console.log("7", notBinary.test("1100100010100110")); // → false 
console.log("8", notBinary.test("1100100010200110")); // → true

// /\d+/ This + indicates that the pattern may repet more than once
// /\d*/ Pattern may occur zero times
console.log("9", /'\d+'/.test("'123'")); // → true 
console.log("10", /'\d+'/.test("''"));// → false 
console.log("11",/'\d*'/.test("'123'")); // → true 
console.log("12",/'\d*'/.test("''")); // → true

//Question mark makes part of the pattern optional
let extension = /file\d?.js/; // \d is optional
console.log("13",extension.test("file.js")); // → true 
console.log("14",extension.test("file8.js")); // → true

//Grouping Subexpressions
//first plus only applies to 'o' second plus applies ti (hoo*)
let cartoonCrying = /boo+(hoo*)+/i;  // insensitive
console.log("15", cartoonCrying.test("Booboohoooohoohooo")); // → true
console.log("16", cartoonCrying.test("Booho"));

//test check if there is a match
//exec gives INFORMATION about the match


let match = /\d+/.exec("one two 100"); 
console.log("17", match); // → ["100"]
console.log("18", match.index); // → 8
//string have a methid that behaves similarly 
console.log("19", "one two 100".match(/\d+/));

let quotedText = /'([^']*)'/; 
quotedText = /'(\w+)'/; 
console.log("20", quotedText.exec("she said 'hello'")); // → ["'hello'", "hello"]

console.log("21", /bad(ly)?/.exec("bad")); // → ["bad", undefined] 
console.log("22", /(\d)+/.exec("123"));// → ["123", "3"]

function getDate(string) {
    let [_, month, day, year] =
      /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
 }
 // format month-day-year
 console.log("23", getDate("10-30-2003"));
 console.log("24", getDate("100-1-30000")); // -> 1'00-1-3000'0 matches
 // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)

//word and string boundaries
 function getDateBetter(string) {
    let match =
      /^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec(string);
    if (match === null) {return "not valid"}
    let [_, month, day, year] = match;
    return new Date(year, month - 1, day);
 } 

 console.log("25", getDateBetter("10-30-2003"));
 console.log("26", getDateBetter("100-1-30000")); // -> does not match 


console.log("27", /cat/.test("concatenate")); // → true 
console.log("28", /\bcat\b/.test("concatenate")); // → false
console.log("29", /\bcat\b/.test("con cat enate")); // → true

//Choice Pattern 
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log("30", animalCount.test("15 pigs")); // → true
console.log("31", animalCount.test("15 pigchickens")); // → false

let possNum = /\b([01]+b|[\da-f]+h|\d+)\b/;
let bin =/[01]+/;
console.log("32", possNum.exec("00011001c"));

let decNoZeroStart = /^[1-9][0-9]*$/;
console.log("33", decNoZeroStart.exec("10234"));

let backtracks = /^.*x/;
console.log("34", backtracks.exec("abcxy"));
// first .* tries to get the whole string
// a, ab, abc, abcx, abcxy
// realize there is not ending x
// tries one char less -> abcx -> match

let binNum = /[01]+b/;
let binNumForever = /([01]+)+b/ //Outer loop is not known for what char are inside
                                //If there is no b the program backtracks the outer 
                                //loop which enters the inner loop
console.log(binNum.exec("0101010101111110101010000010101010001"))

