var dbconnection = require('../../config/dbconnection')
module.exports = function(app){
    
    app.get('/noticias', function(req, res){
        
        var connection = dbconnection()
        
            connection.query('select 1 from noticias where titulo = "eleiçoes"', function(error, result){
            
                res.render("noticias/noticias", {noticias : result})
            });
    });
};
