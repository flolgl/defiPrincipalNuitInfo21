const express = require('express')
const PORT = 80

const app = express();

app.use(express.static('build'))
app.use(express.static('build/static'))

app.get('/', (req,res) => {
    res.sendFile('build/index.html')
})

app.listen(80, () => {
    console.log("Server started on port " + PORT)
})