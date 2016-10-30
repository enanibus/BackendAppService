/**
 * Created by jacobo on 22/10/16.
 */

var api =  {
    get : function (req, res, next) {

        // chequear parametros
        if (typeof  req.params.length < 0 ) {
            return next();
        }

        var context = req.azureMobile;
        var user = context.user.id;

        var query =  {
            sql : "SELECT * FROM Posts"
        };

        req.azureMobile.data.execute(query)
            .then(function (result) {
                res.json(result);
            });
    }
};

api.get.access = 'anonymous';
module.exports = api;