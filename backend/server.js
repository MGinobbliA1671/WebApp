const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.static('../frontend'));
app.use(express.json());


let clickCount = 0;
const filePath = 'clicks.txt';


if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '0');
}



app.post('/api/click', (req, res) => {
    clickCount++;
    fs.writeFile(filePath, clickCount.toString(), (err) => {
        if (err) {
            console.error('Error writing to clicks.txt:', err);
            return res.status(500).json({ error: 'Failed to update click count' });
        }
        console.log(`Button clicked ${clickCount} times`);
        res.json({ clickCount });
    });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});



