const express = require('express')
const path = require('path')
const server = express()

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

server.get('/tarefas', (req, res) => {
    res.sendFile(path.join(__dirname + '/tarefas.html'))
})

server.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/projeto.html'))
})

server.get('/perfil', (req, res) => {
    res.sendFile(path.join(__dirname + '/perfil.html'))
})

server.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
})