//Importando o módulo do framework express
var express = require('express')

//Importando o módulo do consign
var consign = require('consign')

//Importando o body-parser
var bodyParser = require('body-parser')

//Importando o módulo do express-validator(na versão 2.20.8 para o projeto
// npm install --save express-validator@2.20.8  -E)
var expressValidator = require('express-validator')

//Iniciando o objeto do express
var app = express()

//Configurando o EJS como engine de views, com as variáveis 
//'view engine' e 'views' do express
app.set('view engine', 'ejs')
app.set('views', './app/views')

//Configurando o middleware express.static
app.use(express.static('./app/public'))

//Configurando o middleware body-parser de forma a conseguir 
//recuperar as informações da requisição POST na forma de JSon 
//pela propriedade body do request
app.use(bodyParser.urlencoded({extended : true}))

//Configurando o middleware express-validator
app.use(expressValidator())

//Efetuando o autoload das rotas, models e controllers 
//para o objeto app
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app)

//Exportando o objeto app
module.exports = app