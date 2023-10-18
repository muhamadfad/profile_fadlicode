const express = require('express')
var expressLayouts = require('express-ejs-layouts');

const app = express()
const port = 8000



app.set('view engine', 'ejs')



app.use(express.static(__dirname + '/public'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(port, () => {
    console.log(`App listening in port ${port}!!`)
})