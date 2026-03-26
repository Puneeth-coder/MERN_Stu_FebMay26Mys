// Allocating buffers 

const empyhBuffer = Buffer.alloc(8);
console.log("Contents of emptyBuffer:",empyhBuffer);
console.log("Allocated bufer bytes:",[...empyhBuffer]);

const textBuffer = Buffer.from([9,11,92]);
console.log("Buffer from byte array:",textBuffer);

// Buffer.write() write text into the buffer
const buffer = Buffer.alloc(20);
const bytesWritten = buffer.write("Helloworld");
console.log("Bytes written:",bytesWritten);

// Subarray 
const firstSlice = buffer.subarray(3,6);
console.log("First slice of bytes:",[...firstSlice]);

// decode the bytes into text: toString()
console.log("Decoded firstSlice of buffer:",firstSlice.toString("utf8"));