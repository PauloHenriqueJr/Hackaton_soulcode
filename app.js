//Chamando o Express para a nossa Aplicação
const express = require('express');
const mongoose = require('mongoose');
const credentials = require('./credentials.json');
const router = require('./routers/campaign-router')
const app = express();

mongoose.connect(credentials.db.mongoDB.host, { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.set('views', __dirname, 'views');
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 
app.use(express.static("public"));


app.use('/', router)



//CONEXÃO COM O SERVIDOR
app.listen(credentials.app.port, () => {
    console.log(`Server is running! (port ${credentials.app.port})`);
})