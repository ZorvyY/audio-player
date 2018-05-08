const express = require('express');
const cors = require('cors');
const songInfo = require('./assets/tagInfo.js');

const host = '127.0.0.1';
const port = 1337;


const app = express();

app.use(cors());

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/songs/:songName', async (req, res) => {
  const songName = 'assets/' + req.params.songName;
  try {
    const info = await songInfo(songName);
    console.log(info);
    res.send(info);
  } catch (e) {
    if (e.type == 'tagFormat') {
      res.send({'url': songName});
    }
    console.log(e);
    res.send('PANIC');
  }
});

app.listen(port, host);

console.log('Running server at http://localhost:' + port + '/');
