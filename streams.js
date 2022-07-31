const fs = require('fs');
// second argument means it will encode data in readable format as it comes in
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('---- NEW CHUNK ----')
//     console.log(chunk);

    //every time we get new chunk of data, we write this line then the chunk
    // writeStream.write('\nNEW CHUNK\n');
    // writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);