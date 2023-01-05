const app = require("express")();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const apiRouter = require("./src/router/index")
// app.use()
PORT = 3000 || process.env.PORT


const serverSetup = () => {
    app.use("/api",apiRouter);
    app.listen(PORT, () => {
        console.log(`listning to port no ${PORT}`);
    })
    // createCity("mughalsarai")
}

serverSetup();