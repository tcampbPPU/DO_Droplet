const express = require('express');
const credentials = require('./credentials');

const app = express();

app.set('port', process.env.PORT || credentials.port || 3000);

app.get('/', (req, res) => {
    res.send('<h1>Node App</h1>');
});


app.listen(app.get('port'), () => {
    console.log(`Server listening on ${app.get("port")} press Ctrl-C to terminate`);
});