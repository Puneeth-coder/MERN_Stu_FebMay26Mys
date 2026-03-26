// Introduction of buffers in Node.js 
// A buffer stores raw bytes
// Here we create a buffer directly from a string 
const textBuffer = Buffer.from("B");

// The value in buffer is the encoded form of the text
console.log("Buffer object:",textBuffer);
console.log("Buffer length in bytes:",textBuffer.length);
console.log("Byte at index 0",textBuffer[0]);   


// Each character is started internally as byte data for standard ASCII letters there will be a equivalent code
// Buffer stores numeric value between 0 to 255