const os=require("os");
// console.log(os.availableParallelism());
// console.log(os.userInfo());
// console.log(os.uptime());
const currentOs={
    name:os.platform(),
    release:os.release(),
    arch:os.arch(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(os.loadavg());

console.log(os.constants.errno);