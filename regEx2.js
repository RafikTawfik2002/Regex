let lineNum = 0;
function print(...args) {
  lineNum++;
  console.log(lineNum, args);
}

print("Borobudur".replace(/[ou]/, "a")); // → Barobudur
print("Borobudur".replace(/[ou]/g, "a")); // → Barabadar

print(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(
    /(\w+), (\w+)/g,
    "$2 $1"
  )
); // $& refers to the whole match
// → Barbara Liskov
//   John McCarthy
//   Philip Wadler

//Passing a function to replace
let s = "the cia and fbi";
print(s.replace(/\b(fbi|cia)\b/g, (str) => str.toUpperCase())); // → the CIA and FBI

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) {
    // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
print(stock.replace(/(\d+) (\w+)/g, minusOne)); // → no lemon, 1 cabbage, and 100 eggs
print(/(\d+) (\w+)/g.exec(stock));

//Remove all comment from code using regex
function stripComments(code) {
    // single line |(or)  multi-line
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
    }
    print(stripComments("1 + /* 2 */3"));
    // → 1 + 3
    print(stripComments("x = 10;// ten! \n y = 19"));
    // → x = 10;
    print(stripComments("1 /* a */+/* b */ 1")); // → 1 1

//(+, *, ?, and {}) are greedy
//(+?, *?, ??, {}?) non greedy
function stripCommentsNonGreedy(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
    }

    print(stripCommentsNonGreedy("1 /* a */+/* b */ 1")); // → 1 + 1

// /* a */+/* b */       -> greedy     ->   /* */
//                       -> non greedy ->   /* */ + /* */


//Building regex based on input
let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi"); //"\\b(harry)\\b"
print(text.replace(regexp, "_$1_"));
// → _Harry_ is a suspicious character.

//Adding backslash before each special character
let name1 = "dea+hl[]rd";
let text2 = "This dea+hl[]rd guy is super annoying."; 
let escaped2 = name1.replace(/[\\[.+*?(){|^$]/g, "\\$&"); 
print(escaped2);
let regexp3 = new RegExp("\\b" + escaped2 + "\\b", "gi");
print(text2.replace(regexp3, "_$&_"));
// → This _dea+hl[]rd_ guy is super annoying.

//Search method

print(" word".search(/\S/)); // → 2
print(" ".search(/\S/)); // → -1

//last index

let pattern = /y/g; 
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy"); 
print(match); // → 4 
print(pattern.lastIndex); // → 5

//using the same regex has side effects
let digit = /\d/g; 
print("Last index before execution: ", digit.lastIndex);
print(digit.exec("here it is: 1")); // → ["1"]
print("Last index after execution: ", digit.lastIndex);
digit.lastIndex = 0;
print(digit.exec("and now: 1")); // → null

//Looping over matches
let input = "A string with 3 numbers in it... 42 and 88."; 
let number = /\b\d+\b/g;
let match1;
while (match1 = number.exec(input)) {
print(number.lastIndex);
print("Found", match1[0], "at", match1.index); }
// → Found 3 at 14
 //   Found 42 at 33
 //   Found 88 at 40
