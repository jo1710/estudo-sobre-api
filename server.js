import express, { request, response } from 'express'

const app = express()
app.use(express.json())

const users = []



/*
criação de rotas / metodos http
    1) tipo de rota / metodo http
    2) endereçoo
*/

//criar usuarios
app.post('/usuarios', (req, res) => {
    
    users.push(req.body)

    res.status(201).json(users)
})


// listar usuarios
app.get('/usuarios', (req , res) => {
    res.json(users)

    res.status(200).json(users)
})

app.listen(3000)

/* 
    criação de API de usuarios


*/

/* 
    criação banco de dados mongo db
    usuario: josuerocha_db
    senha: Josueroch@201711

    mongodb+srv://josuerocha_db:Josueroch@201711@josue.uoijyy5.mongodb.net/?appName=josue

*/