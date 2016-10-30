/**
 * Created by jacobo on 30/10/16.
 */

var api = {
    put: function (req, res, next) {

        if (typeof  req.params.length < 0) {
            console.log("error")
        }
        // sql: "Select * FROM Posts WHERE paraPublicar = '" 1 "'"
        // var querySelect = {
        //     sql: "Select * FROM Posts"
        // };

        // req.azureMobile.data.execute(querySelect)
        //     .then(function (result) {
                    var queryUpdate = {
                        // sql: "UPDATE Posts SET paraPublicar=" + false + ", publicado=" + true + " WHERE paraPublicar = " + true + ""
                        sql: 'UPDATE Posts SET paraPublicar=@pendientes, publicado=@publica WHERE paraPublicar=@pendiente',
                            parameters: [
                                {name: 'pendientes' , value : false},
                                {name: 'publica' , value : true},
                                {name: 'pendiente' , value : true}
                            ]
                    };
                    req.azureMobile.data.execute(queryUpdate)
                        .then(function (result) {
                            res.json("-----------Ejecutado JOB de Publicación------------")
                        });
            //     }
            // );
    }
};

api.put.access = 'anonymous';

module.exports = api;