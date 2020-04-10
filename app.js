//Importando as configs do servidor
var app = require('./config/server.js')

//Parametrizando a porta de escuta
var server = app.listen(3000, function() {
	console.log('Servidor no ar')
})

var io = require('socket.io').listen(server)

app.set('io', io)

//Criando a conexão por websocket
io.on('connection', function(socket){
	console.log('Usuário conectou')

	socket.on('disconnect', function(){
		console.log('Usuário desconectou')
	})

	socket.on('msgParaServidor', function(data){
		//Eventos de dialogo
		socket.emit(
			'msgParaCliente', 
			{
				apelido: data.apelido, 
				mensagem: data.mensagem
			}
		)
		socket.broadcast.emit(
			'msgParaCliente', 
			{
				apelido: data.apelido, 
				mensagem: data.mensagem
			}
		)

		//Eventos da relação de participantes
		if(parseInt(data.apelidoAtualizadoNosClientes) == 0){
			socket.emit(
				'participantesParaCliente', 
				{
					apelido: data.apelido
				}
			)
			socket.broadcast.emit(
				'participantesParaCliente', 
				{
					apelido: data.apelido
				}
			)
		}
	})
})