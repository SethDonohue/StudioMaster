const exp = require('express');

const app = exp();

const bp = require('body-parser');

app.use(bp.json());

app.get('/', (req, res) => {
    res.send('<img src="https://s3-us-west-2.amazonaws.com/studiomaster.photo.bucket/1534181414973Escher-Big.jpg" alt="stored on amazon" />')
})

app.listen('2000', () => {
    console.log('listening on 2000')
})