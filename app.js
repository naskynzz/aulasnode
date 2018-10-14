var app = require('./config/server')

//rotas
var rotaNoticias = require('./app/routes/noticias')
rotaNoticias(app)

var rotaHome = require('./app/routes/home')
rotaHome(app)

var rotaInclusao = require('./app/routes/formulario_inclusao_noticias')
rotaInclusao(app)
app.listen(3000, function(){
    console.log("servidor rodando na porta 3000 ")
})