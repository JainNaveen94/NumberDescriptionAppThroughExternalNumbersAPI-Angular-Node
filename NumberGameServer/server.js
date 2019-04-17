const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


let numberTheoryArray = ["Starts"];

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, X-Auth-Token, Accept");
        next();
});

app.get('/data', async (req,res) => {
    await res.send(numberTheoryArray);
});

app.post('/data', async (req, res) => {
    let dataToPush = req.body.datatoAdd;
    numberTheoryArray.push(dataToPush);
    res.send(numberTheoryArray);
})


app.listen(4444);