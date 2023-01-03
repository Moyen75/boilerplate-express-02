let express = require('express');
let app = express();
app.use(express.json())

app.get("/json", (req, res) => {
    const json = {
        message: 
         "Hello json"
    }
    res.send(json);
});


module.exports = app;
