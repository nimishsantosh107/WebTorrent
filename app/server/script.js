//GENERATES SERVERBUNDLE.js
const WebTorrent = require('webtorrent');
const dragDrop = require('drag-drop');

var client = new WebTorrent();

seedButton.addEventListener('click',function () {
    console.log(seedInput.files);
    client.seed(seedInput.files, { announce: ["http://localhost:8000/announce",
                                              "udp://0.0.0.0:8000", 
                                              "udp://localhost:8000", 
                                              "ws://localhost:8000",
                                              "http://localhost:8000/stats"]}, function (torrent) {
        console.log('SEEDING: ' + torrent.magnetURI);
    });
});