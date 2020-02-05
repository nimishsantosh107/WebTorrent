//GENERATES SERVERBUNDLE.js
const WebTorrent = require('webtorrent');
const dragDrop = require('drag-drop');

var client = new WebTorrent();

seedButton.addEventListener('click', function () {
    console.log(seedInput.files);
    client.seed(seedInput.files, {
        announce:  ["http://192.168.0.104:6000/announce",
                    "udp://192.168.0.104:6000",
                    "ws://192.168.0.104:6000"
                    ]
    }, function (torrent) {
        console.log('SEEDING: ' + torrent.magnetURI);
    });
});