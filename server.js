const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the static HTML and JavaScript files
app.use(express.static(path.join(__dirname, 'public')));

// Serve the GeoJSON file after it's processed
app.get('/data/canada.geojson', (req, res) => {
    res.sendFile(path.join(__dirname, 'shapefiles/canada.geojson'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
