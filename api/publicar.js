/**
 * Created by jacobo on 30/10/16.
 */

var azureMobile = require('azure-mobile-apps');
                    var queryUpdate = {
                        sql: 'UPDATE Posts SET paraPublicar=@pendientes, publicado=@publica WHERE paraPublicar=@pendiente',
                            parameters: [
                                {name: 'pendientes' , value : false},
                                {name: 'publica' , value : true},
                                {name: 'pendiente' , value : true}
                            ]
                    };
                    console.log("Ejecutando UPDATE de JOB de Publicación")
                    azureMobile.data.execute(queryUpdate)
                        .then(function (result) {
                            res.json("-----------Ejecutado JOB de Publicación------------")
                        });
