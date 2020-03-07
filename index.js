// es5
const express = require("express");
const server = express();
server.use(express.json());

//Criação de rotas

const users = ["Pedrão"];

server.get("/teste/:id", (req, res)=> {
    const { id } = req.params;
    return res.status(200).send(id);
});

server.get("/teste2", (req, res)=> {
    return res.status(200).json({aluno:"abner"});
} );

server.post("/users", (req, res) => {
    const { nome } = req.body;
    users.push(nome);
    return res.status(200).json({ resultado: `Meu nome é: ${ nome }`});
});

server.get("/users", (req, res)=>{
    return res.status(200).json(users);
});

server.listen(3333);