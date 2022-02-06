// let args = process.argv.slice(2);
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', key => {
  if(key === '\u0062'){
    process.stdout.write('\x07');
  } else if (key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao!\n`);
    process.exit();
  } else if (!isNaN(key)) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    timer(key);
  }
  
})

const timer = function(sec) {
    if(sec > 0 && !isNaN(sec)){
      setTimeout(() => {  
        process.stdout.write('\x07');
      }, sec * 1000)
    }  
}