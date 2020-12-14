// imports
const express = require('express');
const app = express();
const port = 5000;

//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public' ));
app.use('/img', express.static(__dirname + 'public/img' ));



app.get('', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(port, () => console.info('start on port 5000'));