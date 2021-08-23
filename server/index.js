const express = require('express')
const cors = require('cors')

const app = express()
const mysql = require('mysql')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user:"wgmp",
    host:"localhost",
    password:"Password123!",
    database:"clientes"
})

app.post("/cadastros", (req,res)=>{
    const nome = req.body.nome;
    const idade = req.body.idade;
    const cpf = req.body.cpf

    db.query(
    
        "INSERT INTO usuarios (nome,idade,cpf) VALUES (?,?,?)",
        [nome,idade,cpf], 
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send("Inserido com sucesso")
            }

        }
    ) 
})

app.get("/cadastros", (req,resp)=>{

    db.query("SELECT * FROM usuarios", (err,result)=>{
        err ? console.log(err) : resp.send(result)
    }
    )
})


app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})

