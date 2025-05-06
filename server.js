import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {

    res.send ("server running")
});

app.listen (PORT, () => {

    console.log ("server running")
});