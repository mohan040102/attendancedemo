import express from "express";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config()

const port = process.env.PORT || 5000
console.log(process.env.PORT)

let app: any = express();

app.use(cors())

app.get('/', function (req: any, res: any) {
    res.send('hello world guys')
});

app.post('/webhook', (req: any, res: any) => {
    console.log("hellow")
    const data = req.body   
    res.send("post got");
})

app.listen(port, function () {
    console.log('Attendance System app listening on port 5000!');
});