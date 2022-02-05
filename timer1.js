let args = process.argv.slice(2);
let timers = args.map(time => time * 1000);

timers.forEach(timer => {
  if(timer > 0 && !isNaN(timer)){
    setTimeout(() => {  
      process.stdout.write('\x07');
    }, timer)
  }  
})