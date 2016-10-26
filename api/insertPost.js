/**
 * Created by jacobo on 26/10/16.
 */

var api =  {
    post : function (req, res, next) {

        // chequear parametros
        if (typeof  req.params.length < 0 ) {
            return next();
        }

        // var context = req.azureMobile;
        // console.log(context)
        // var user = context.user.id;

        let titulo = req.body.titulo
        let texto = req.body.texto
        // let foto = req.parameters.foto
        // let latitud = req.parameters.latitud
        // let longitud = req.parameters.longitud
        // let autor = req.parameters.autor
        // let publicado = req.parameters.publicado
        // let valoracion = req.parameters.valoracion
        // let paraPublicar = req.parameters.paraPublicar
        // let container = req.parameters.container

        // var query =  {
        //     sql : "INSERT INTO Posts VALUES("titulo", "texto", "foto", "latitud", "longitud", "autor", "publicado", "valoracion", "paraPublicar", "container")"
        // };

        var query =  {
            sql : "INSERT INTO Posts VALUES("titulo", "texto")"
        };

        req.azureMobile.data.execute(query)
            .then(function (result) {
                res.json(result);
            });
    }
};

api.get.access = 'anonymous';
module.exports = api;