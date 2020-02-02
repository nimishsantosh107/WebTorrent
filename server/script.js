var client = new WebTorrent();

seedButton.addEventListener('click',function () {
    console.log(seedInput.files);
    client.seed(seedInput.files, function (torrent) {
        console.log('SEEDING ' + torrent.magnetURI);
    });
});