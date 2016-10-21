/**
 * Created by jacobo on 21/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();

table.columns = {
    "name" : "string",
    "secondName" : "string"
};

/*
    Permisos de acceso a la tabla

 */

table.read.access = 'anonymous';
table.update.access = 'disable';


module.exports = table;