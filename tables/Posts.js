/**
 * Created by jacobo on 26/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table(); 

table.columns = {
    "titulo" : "string",
    "texto" : "string",
    "foto" : "string",
    "latitud" : "number",
    "longitud" : "number",
    "autor" : "string",
    "publicado" : "boolean",
    "valoracion" : "number",
    "numOfVals" : "number",
    "paraPublicar" : "boolean",
    "container" : "string"
};

// table.dynamicSchema = false;

/*
 Trigger para insert
 */

table.insert(function (context) {
    context.item.idUsuario = context.user.id;
    return context.execute();
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