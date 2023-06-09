const express = require('express')
const app = express();
const db = require('./db/db.json')
PORT = 3000

app.use(express.static('public'))


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(db)

});

app.post('/api/notes', (req, res) => {
    res.json(`${req.method} has been recieved`)
    console.info(`${req.method} request received`);

});

app.delete('/api/notes', (req, res) => {
    res.json(`${req.method} has been recieved`)
    console.info(`${req.method} request received`);

});




app.listen(PORT, () => {
    console.log(`The current port being used in ${PORT}.`)
});