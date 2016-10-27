/**
 * Created by jacobo on 26/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table(); 

table.columns = {
    "titulo" : "string",
    "texto" : "string",
    "foto" : "string"
    // "latitud" : "number",
    // "longitud" : "number",
    // "autor" : "string",
    // "publicado" : "boolean",
    // "valoracion" : "number",
    // "numOfVals" : "number",
    // "paraPublicar" : "boolean",
    // "container" : "string"
};

// table.dynamicSchema = false;

/*
 Trigger para insert
 */

// table.insert(function (context) {
//     context.item.idUsuario = context.user.id;
//     return context.execute();
// });


table.insert(function(item, context, request) {
    console.log("Saving new News");
    console.log(item.description);
    // Setting default values
    item.longitud = 0
    item.latitud = 0
    item.publicado = false
    item.valoracion = 0
    item.numOfVals = 0
    item.paraPublicar = true
    item.container = ""

    var error = false
    if(item.titulo === ""){
        request.respond(statusCodes.badRequest, 'Text must be required');
        error = true;
    }
    if(item.texto.length < 10){
        request.respond(statusCodes.badRequest,
            'Body length must be more than 10 characters');
        error = true;
    }
    // if(item.foto === ""){
    //     request.respond(statusCodes.BAD_REQUEST, 'Photo must be required');
    //     error = true;
    // }

    if (!error){
            context.item.idUsuario = context.user.id;
            console.log("Insertando post de usuario: " + context.user.id);
            return context.execute();
        // context.user.getIdentities({
        //     success: function (identities) {
        //         var http = require('request');
        //         console.log('Identities: ', identities);
        //         var url = 'https://graph.facebook.com/me?fields=id,name,birthday,hometown,email,picture,gender,friends&access_token=' +
        //             identities.facebook.accessToken;
        //
        //         var reqParams = { uri: url, headers: { Accept: 'application/json' } };
        //         http.get(reqParams, function (err, resp, body) {
        //             var userData = JSON.parse(body);
        //             console.log('Logado -> ' + userData.name);
        //             item.id = userData.id;
        //             item.autor = userData.name
        //             request.execute();
        //         });
        //     }
        // });
    }
});


// table.read(function (context) {
//     context.query.where({usuario : context.user.id});
//     return context.execute();
// });

/*
 Permisos de acceso a la tabla
 */

table.read.access = 'anonymous';
table.update.access = 'anonymous';
table.delete.access = 'anonymous';
table.insert.access = 'anonymous';

module.exports = table;