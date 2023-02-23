const readline = require('readline');

const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('What is your name?',(name)=>{
    console.log(`hello ${name}`);
    rl.close();
})
