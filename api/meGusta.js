/**
 * Created by jacobo on 29/10/16.
 */

var api = {
    put: function (req, res, next) {
        var date = {currentTime: Date.now()};
        console.log("recibida nueva valoracion "+req.query["valoracion"]);
        if (typeof  req.params.length < 0) {
            console.log("error")
        }
        console.log(req.query["id"]);
        var nuevaValoracion = req.query["valoracion"];
        var querySelect = {
            sql: "Select valoracion,numOfVals FROM Posts WHERE id = '" + req.query["postId"] + "'"
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
                        sql: "UPDATE news SET ratingscount='" + numOfVals + "', rating='" + valoracionActual + "' WHERE id = '" + req.query["id"] + "'"
                    };
                    req.azureMobile.data.execute(queryUpdate)
                        .then(function (result) {
                            res.json("OK!")
                        });
                }
            );
    }
};

api.put.access = 'anonymous';
module.exports = api;
