let buf = Buffer.alloc(6);

console.log(buf);

// Creating a new buffer
const len = buf.write("Hello World");
console.log(`len ${len}`);

var buf1 = Buffer.from('xyz');
var buf2 = Buffer.from('xyz');
var a = Buffer.compare(buf1, buf2);
console.log(`a ${a}`);