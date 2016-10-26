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

        let titulo = req.params.titulo
        let texto = req.params.texto
        let foto = req.params.foto
        let latitud = req.params.latitud
        let longitud = req.params.longitud
        let autor = req.params.autor
        let publicado = req.params.publicado
        let valoracion = req.params.valoracion
        let paraPublicar = req.params.paraPublicar
        let container = req.params.container

        var query =  {
            sql : "INSERT INTO Posts VALUES("titulo", "texto", "foto", "latitud", "longitud", "autor", "publicado", "valoracion", "paraPublicar", "container")"
        };

        req.azureMobile.data.execute(query)
            .then(function (result) {
                res.json(result);
            });
    }
};

api.get.access = 'anonymous';
module.exports = api;