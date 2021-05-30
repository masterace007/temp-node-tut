const { log } = require('console');
const os = require('os');

//info about current user 
const user = os.userInfo()

console.log(user);

//methods returns the system up time in second 
console.log(`The System Uptime is ${os.uptime()} second`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)