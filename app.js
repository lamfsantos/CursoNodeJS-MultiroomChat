//Importando as configs do servidor
var app = require('./config/server.js')

//Parametrizando a porta de escuta
var server = app.listen(8080, function() {
	console.log('Servidor no ar')
})

require('socket.io').listen(server)