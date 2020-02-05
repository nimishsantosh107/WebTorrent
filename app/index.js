const express = require('express');

const app = express();
const PORT = 5000;

app.use("/server", express.static(__dirname + "/server"));
app.use("/client", express.static(__dirname + "/client"));

app.listen(PORT,()=>{console.log(`SERVER UP ON PORT ${PORT}`)});