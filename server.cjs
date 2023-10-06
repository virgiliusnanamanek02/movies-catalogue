const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

app.use('/login', (req,res) => {
    res.send({
        token: 'nana123'
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}/login`);
});
