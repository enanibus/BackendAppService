/**
 * Created by jacobo on 27/10/16.
 */

function insert(item, context, request) {
    console.log("Saving new News");
    // Setting default values
    item.valoracion = 0
    item.numOfVals = 0
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
        context.user.getIdentities({
            success: function (identities) {
                var http = require('request');
                console.log('Identities: ', identities);
                var url = 'https://graph.facebook.com/me?fields=id,name,birthday,hometown,email,picture,gender,friends&access_token=' +
                    identities.facebook.accessToken;

                var reqParams = { uri: url, headers: { Accept: 'application/json' } };
                http.get(reqParams, function (err, resp, body) {
                    var userData = JSON.parse(body);
                    console.log('Logado -> ' + userData.name);
                    item.id = userData.id;
                    item.autor = userData.name
                    request.execute();
                });
            }
        });
    }
}