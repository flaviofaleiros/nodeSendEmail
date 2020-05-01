const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(require("./routes"));

app.listen(process.env.PORT || 3399);