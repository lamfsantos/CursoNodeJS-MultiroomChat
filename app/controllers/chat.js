module.exports.iniciaChat = function(application, request, response) {
	var dadosForm = request.body

	request.assert('apelido', 'Nome ou apelido é obrigatório!').notEmpty()
	request.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres!').len(3, 15)

	var errors = request.validationErrors()

	if(errors){
		response.render("index", {validacao : errors})
		return
	}

	application.get('io').emit(
		'msgParaCliente',
		{
			apelido: dadosForm.apelido,
			mensagem: ' Acabou de entrar no chat'
		}
	)

	response.render("chat", {dadosForm: dadosForm})
}