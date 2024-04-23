'use strict';

const tracker = require('./tracker');
const torrentParser = require('./torrent-parser');

const torrent = torrentParser.open('Freeplane-Setup-1.11.12.exe.torrent');

tracker.getPeers(torrent, peers => {
  console.log('list of peers: ', peers);
});

