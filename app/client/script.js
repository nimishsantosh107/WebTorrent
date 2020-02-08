const WebTorrent = require('webtorrent');
const localforage = require('localforage');

window.LOCALFORAGE = localforage;
localforage.config({
    driver  : localforage.INDEXEDDB,
    name    : 'WebTorrent',
});

var client = new WebTorrent();
window.CLIENT = client;
window.WEBTORRENT = WebTorrent;
window.TORRENT = null;
window.MAGNETURI = "magnet:?xt=urn:btih:9a1d86b3a8b110fca2974d21a5a7254243d19f3d&dn=5SOS+-+If+You+Dont+Know.mp3&tr=http%3A%2F%2F192.168.0.104%3A6000%2Fannounce&tr=udp%3A%2F%2F192.168.0.104%3A6000&tr=ws%3A%2F%2F192.168.0.104%3A6000";

const addTorrent = function (torrent) { //MAGNET OR TORRENT
    client.add(torrent, {
        path: "~/Desktop",
        announce: ["http://192.168.0.104:6000/announce",
            "udp://192.168.0.104:6000",
            "ws://192.168.0.104:6000"
        ]
    }, function (torrent) {
        window.TORRENT = torrent;
    });
}
window.FUNCADDTORRENT = addTorrent;

const removeTorrent = function (torrent) {
    client.remove(torrent);
}
window.FUNCREMOVETORRENT = removeTorrent;



/* BUFFER */
// window.TORRENT.files[0].getBuffer((err,buf)=>{window.FILEBUF = buf})
// saveBuffer([ window.FILEBUF ], 'FILENAME');
const saveBuffer = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, name) {
        var blob = new Blob(data, {
            type: "octet/stream"
        }),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = name;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());
window.FUNCSAVEBUF = saveBuffer;

// /*USING FS*/
// const saveFile = function (file,path){
//     file.createReadStream()
//         .pipe(fs.createWriteStream(path))
//         .on('close', function () { console.log('SAVED!') });
// }
