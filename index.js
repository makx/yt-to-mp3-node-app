const youtubeMp3Converter = require('youtube-mp3-converter');
const path = require('path');

const dirName = path.join(__dirname, '/music');

const convertLinkToMp3 = youtubeMp3Converter(dirName)

async function downloadYT (id) {
  return convertLinkToMp3("https://www.youtube.com/watch?v=" + id);
}

function main() {
  if (process.argv.length < 2) throw Error('No args provided');
  const listOfSongs = process.argv.slice(2); // get the arguments passed to the script
  listOfSongs.reduce((currentPromise, currentId) => 
    currentPromise.then(() => downloadYT(currentId))
  , Promise.resolve());
}

main();
