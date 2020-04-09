//Importando as configs do servidor
var app = require('./config/server.js')

//Parametrizando a porta de escuta
app.listen(8080, function() {
	console.log('Servidor no ar')
})