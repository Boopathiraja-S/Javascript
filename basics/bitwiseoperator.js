const a = 4;
const b = 2;
const c = 1;
let per = 0;
per = per | a | b
console.log(per)
let msg = 0
msg = (per & a) ? 'yes' : 'no'
console.log(msg)