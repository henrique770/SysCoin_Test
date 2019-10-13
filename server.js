const express = require('express');
const app = express();

app.use(express.json());

app.get("/provasyscoin", (req, res) => {
    const nome = 'Henrique Leal Araújo';
    const user = req.query.user;
    const password = req.query.password;
    if(req.query.user === 'syscoin' && req.query.password === 'meEscolhe') {

    res.json({mensagem: `Meu nome completo é ${nome}. Eu quero essa vaga!`});
    
  } else {
    res.json({mensagem: `Credenciais Erradas`});
  }
});

app.listen(process.env.PORT || 3000);