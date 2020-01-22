module.exports = app => {
    const routes =require('./routes')
    const bodyParser = require('body-parser')

    // CORS
    const  cors = function(req, res, next) {
        res.header("X-Powered-By", "ExquiseApp")
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        res.header('Access-Control-Allow-Headers', ['Content-Type', 'Authorization', 'X-Access-Token'])
        next()
    }


    app.use(bodyParser.json())
    app.use('/api', cors)
    app.use('/api', routes)
}