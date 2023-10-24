const fs = require('fs');
const util = require('util');

async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});
const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

async function main() {
  try {
    const data = await readFilePromise('text.txt', 'utf8');
    console.log(data);

    const newData = "hello dear";
    await writeFilePromise('message.txt', newData, { flag: 'a' });
    console.log('Data appended to message.txt');
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

//main();

