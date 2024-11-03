import express from 'express'
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("Hellow from the Servrer")

})

const port = process.env.PORT || 8000

app.listen(port,()=>console.log("http://localhost:8000/"));


