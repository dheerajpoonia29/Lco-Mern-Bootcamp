const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    return res.send("hi my code is running on server");
})

app.listen(port, () => {
    console.log(`server at ${port} running ...`)
})