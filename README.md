
<p align="center"> 
<img height=70 src="https://surveymonkey-assets.s3.amazonaws.com/survey/187046308/9b712ae5-0da7-49a6-97f8-3b2d60d49b18.png">
</p>

# Prova Internship Program 2019 Full Stack Developer

Desenvolva um serviço web, que utilize a tecnologia `REST`. Hospede esse serviço em qualquer servidor de sua preferência (Heroku, amazon, e etc). 

Pode usar tanto a linguagem `PHP` quanto `Javascript`. Este serviço web deve esperar uma requisição `GET`, passando-se o seguinte usuário e senha como parâmetros da requisição:

``` 
user:"syscoin"

password:"meEscolhe" 
```

A aplicação deve retornar o seguinte `JSON` caso as credenciais transmitidas estejam ***corretas***:

```json
{
  "mensagem": "Meu nome completo é xxx. Eu quero essa vaga!"
}
```
Caso as credenciais enviadas estejam ***erradas***, ou a requisição esteja sem parâmetros, retorne a seguinte mensagem:
```json
{
  "mensagem": "Credenciais erradas."
}
```
A `URL` deve seguir o seguinte formato:
```
http://xxx/provasyscoin?user="syscoin"&password="meEscolhe"
```
Onde `xxx` pode ser um domínio ou um IP.

## Oque é necessário para rodar

Após inserir a pasta `node_modules` ao projeto é necessário digitar no terminal:
```
yarn start
```
## Resolução
Essa aplicação foi feita utilizando `Express` e funciona com base nos seguintes dados passados na `URL:` 
```
/provasyscoin?user=syscoin&password=meEscolhe
```

O deploy dessa aplicação foi feita na plataforma Heroku e pode ser acessada por esse link: https://syscointest.herokuapp.com/provasyscoin?user=syscoin&password=meEscolhe
