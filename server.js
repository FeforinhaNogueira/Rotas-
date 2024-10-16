const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// rota para carregar uma pagina html
app.get('/index.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get('/about.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
});

// iniciando servidor
app.listen(PORT,() => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
