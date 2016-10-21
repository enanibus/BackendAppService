/**
 * Created by jacobo on 21/10/16.
 */

var express = require("express"),
    azuremobilapps = require("azure-mobile-apps");

var app = express(),
    mobile = azuremobilapps();

mobile.tables.import("./tables");

mobile.api.import("./api");

app.use(mobile);

app.listen(process.env.PORT || 3000);