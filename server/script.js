var client = new WebTorrent();

seedButton.addEventListener('click',function () {
    console.log(seedInput.files);
    client.seed(seedInput.files, { announce: ["udp://0.0.0.0:6000", "udp://localhost:6000", "ws://localhost:6000","http://localhost:6000/stats"]},function (torrent) {
        console.log('SEEDING ' + torrent.magnetURI);
    });
});