//Chamando o Express para a nossa Aplicação
const express = require('express');
const mongoose = require('mongoose');
const credentials = require('./credentials.json');
const router = require('./routers/campaign-router')
const app = express();
const porta = 3000

//mongoose.connect(credentials.db.mongoDB.host, { useNewUrlParser: true, useUnifiedTopology: true });

// Conexão ao database mongodb
const database = "mongodb+srv://paulo_henrique:paulo_henrique@cluster0.kypul.mongodb.net/hackaton?retryWrites=true&w=majority" //inserir seu acesso mongodb

mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true  }, (err, client) => {
  if (err) return console.log(err);

  db = mongoose.connection;
  console.log("Banco de Dados Conectado");
});

app.set('view engine', 'ejs');
app.set('views', __dirname, 'views');
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 
app.use(express.static("public"));


app.use('/', router)



/*CONEXÃO COM O SERVIDOR

app.listen(credentials.app.port, () => {
    console.log(`Server is running! (port ${credentials.app.port})`);
})*/

app.listen(porta, () => {
    console.log("Servidor ativado na porta " + porta);
  });