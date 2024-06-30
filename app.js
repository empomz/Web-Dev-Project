const express = require('express');
const app = express();
const port = 3000;



app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Contact.html'); // send HTML file on GET request
});

app.post(__dirname +'/submit-form', (req, res) => {
    const email = req.body.email; // access form data
    const message = req.body.message;
    // Add validation logic here
    res.send(`Email is sent!\nClick here to be sent back to the Home Page`);

});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

