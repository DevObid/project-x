const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/data', (req, res) => {
    const data = {
        message: 'Hello, here is your data!',
        timestamp: new Date(),
        value: 42
    };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
