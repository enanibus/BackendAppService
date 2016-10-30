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

table.dynamicSchema = false;

/*
 Trigger para insert
 */

table.insert(function (context) {
    context.item.idUsuario = context.user.id;
    context.item.latitud = 0;
    context.item.longitud = 0;
    context.item.publicado = false;
    context.item.valoracion = 0;
    context.item.numOfVals = 0;
    context.item.paraPublicar = false;
    context.item.container = "";

    var error = false

    if(!context.item.titulo){
        context.res.status(500).json({status: "Title is required"})
        error = true;
    }


    if(!context.item.texto || (context.item.texto.length < 10)){
        context.res.status(500).json({status: "Text must be of 10 length at least"})
        error = true;
    }

    if(!context.item.autor){
        context.res.status(500).json({status: "Author is required"})
        error = true;
    }

    if (!error) {
        return context.execute();
    }

});

table.read(function (context) {
    console.log("************************");
    if (!context.user.id) {
        return context.execute();
    }
    else {
        console.log(context.user.id);
        context.query.where({idUsuario: context.user.id});
        return context.execute();
    }
});

/*
 Permisos de acceso a la tabla
 */

table.read.access = 'anonymous';
table.insert.access = 'authenticated';
table.update.access = 'authenticated';
// table.delete.access = 'anonymous';

module.exports = table;