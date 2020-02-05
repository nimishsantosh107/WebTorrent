const WebTorrent = require('webtorrent');

//window.TEMP.files[0].getBuffer((err,buf)=>{window.FILE = buf})
// saveBuffer([ ARR ], 'FILENAME');
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

var client = new WebTorrent();
window.CLIENT = client;
window.WEBTORRENT = WebTorrent;

client.add("magnet:?xt=urn:btih:d6d80a6f3458836876ef02f21e03a4f7f44ed312&dn=NOTES.txt&tr=http%3A%2F%2F192.168.0.104%3A6000%2Fannounce&tr=udp%3A%2F%2F192.168.0.104%3A6000&tr=ws%3A%2F%2F192.168.0.104%3A6000",
            {   path:"/Users/nimish/Downloads",
                announce: ["http://192.168.0.104:6000/announce",
                        "udp://192.168.0.104:6000",
                        "ws://192.168.0.104:6000"
                        ]
            },function (torrent) {
                window.TORRENT = torrent;
            }
);