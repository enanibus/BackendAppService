/**
 * Created by jacobo on 29/10/16.
 */

var api = {
    put: function (req, res, next) {

        if (typeof  req.params.length < 0) {
            console.log("error")
        }

        var nuevaValoracion = parseInt(req.query["valoracion"]);
        var querySelect = {
            sql: "Select valoracion,numOfVals FROM Posts WHERE id = '" + req.query["id"] + "'"
        };

        req.azureMobile.data.execute(querySelect)
            .then(function (result) {
                    var numOfVals = result[0].numOfVals;
                    var valoracionActual = result[0].valoracion;
                    console.log(valoracionActual);
                    if (numOfVals == 0) {
                        valoracionActual = nuevaValoracion;
                        numOfVals++;
                    } else {
                        valoracionActual = ((valoracionActual * numOfVals) + nuevaValoracion) / (numOfVals + 1)
                        numOfVals++;
                    }
                    var queryUpdate = {
                        sql: "UPDATE Posts SET numOfVals='" + numOfVals + "', valoracion='" + valoracionActual + "' WHERE id = '" + req.query["id"] + "'"
                    };
                    req.azureMobile.data.execute(queryUpdate)
                        .then(function (result) {
                            res.json("OK")
                        });
                }
            );
    }
};

api.put.access = 'anonymous';

module.exports = api;