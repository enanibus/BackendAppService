/**
 * Created by jacobo on 26/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();

table.columns = {
    "titulo" : string,
    "texto" : string
    // "foto" : string,
    // "latitud" : number,
    // "longitud" : number,
    // "autor" : string,
    // "publicado" : boolean,
    // "valoracion" : number,
    // "paraPublicar" : boolean,
    // "container" : string
};

// table.dynamicSchema = false;

/*
 Trigger para insert
 */

// table.insert(function (context) {
//     context.item.idUsuario = context.user.id;
//     return context.execute();
// });
//
// table.read(function (context) {
//     context.query.where({usuario : contex.user.id});
//     return context.execute();
// });

/*
 Permisos de acceso a la tabla
 */

// voy a ver el enuncaido
// table.update.access = 'authenticated';
// table.delete.access = 'authenticated';
// table.insert.access = 'authenticated';

module.exports = table;