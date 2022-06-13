let str = `
    This story isn't about storytelling it's more about the manipulation of quotes using replace() and 
    regular expressiona. The prof said 'Okay the program works.' I however wasn't too sure. I said 
    'It is hard for me to code'. This story wasn't written for fun though, rather just to replace '' 
    with "". Sorry they are all replaced now.
`

let pattern = /[^\w]\'(.*?)\'[^\w]/g;


let newStr = str.replace(pattern, ` "$1" `); 
console.log(newStr);