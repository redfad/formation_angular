const express = require('express');
const app = express();

app.use(express.static('./dist/formation-angular'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/formation-angular/' }),
);
app.listen(process.env.PORT || 8080);
