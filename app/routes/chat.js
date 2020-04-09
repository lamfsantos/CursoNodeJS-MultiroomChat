module.exports = function(application) {
	application.post('/chat', function(request, response){
		response.render("chat")
	})
	application.get('/chat', function(request, response){
		response.render("chat")
	})
}