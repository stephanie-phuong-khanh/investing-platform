const 
    express = require('express'),
    app = express(),
    port = 3000;

app.get('/', (req, res) => res.send('Arch 👼!'))

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))