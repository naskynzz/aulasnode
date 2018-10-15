module.exports = function(app){
    
    app.get('/noticias', function(req, res){
        
        var mysql = require('mysql');
        
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '1234',
            database : 'aulasnode'
            });
        
            connection.query('select * from jornalista', function(error, result){
            
                if(error){
                    console.log(error)
                }else{
                    res.send({result});
                }
            });
    });
};
