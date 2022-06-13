let a = new Date()

console.log(new Date());
let b = new Date().getTime();
console.log(b);
console.log(new Date(b));
console.log(new Date());

console.log("Since I was born", (new Date().getTime() - new Date(2002,9,25).getTime())/(1000*60*60*24*365));
console.log("Since you was born", new Date(1970,0,1, -5).getTime());

let d = new Date("2022-06-12");
console.log("different format", d)