const express = require('express')
const qrcode = require('qrcode')

const app = express()


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


app.get('/scanner', (req, res) => {
    res.sendFile(__dirname + '/views/scanner.html')
})

app.get('/img.png', (req, res) => {
    res.sendFile(__dirname + '/assets/images.jpeg')
})

app.get('/code', async (req, res) => {
    const id = req.query.id;
    if (id) {
        const link = await qrcode.toDataURL(id)
    
        res.json({link})   
    }else{
        res.status(400)
    }
})

app.listen(4554, () => {
    console.log("Server running ...");
})