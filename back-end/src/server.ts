import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Hello marilzon' });
});

app.listen(3333, () => {
    console.log("Server list on port 3333!")
});
