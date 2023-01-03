let express = require('express');
let app = express();
app.use(express.json())
app.set('json spaces', 2);

app.get("/json", (req, res) => {
    res.json({
        message: "Hello json"
    });
});


module.exports = app;
