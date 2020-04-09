//Importando as configs do servidor
var app = require('./config/server.js')

//Parametrizando a porta de escuta
var server = app.listen(3000, function() {
	console.log('Servidor no ar')
})

var io = require('socket.io').listen(server)

//Criando a conexão por websocket
io.on('connection', function(socket){
	console.log('Usuário conectou')

	socket.on('disconnect', function(){
		console.log('Usuário desconectou')
	})
})