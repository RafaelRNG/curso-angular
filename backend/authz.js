"use strict";
exports.__esModule = true;
exports.handleAuthorization = void 0;
var jwt = require("jsonwebtoken");
var api_config_1 = require("./api-config");
exports.handleAuthorization = function (request, response, next) {
    var token = extractToken(request);
    if (!token) {
        response.setHeader("WWW-Authenticate", "Bearer token_type='JWT'");
        response.status(401).json({ message: "Você precisa se autenticar." });
    }
    else {
        jwt.verify(token, api_config_1.apiConfig.secret, function (error, decoded) {
            if (decoded) {
                next();
            }
            else {
                response.status(403).json({ message: "Não autorizado." });
            }
        });
    }
};
function extractToken(request) {
    var token = "";
    if (request.headers && request.headers.authorization) {
        //Autorization: Beader ZZZ.ZZZ.ZZZ
        var parts = request.headers.authorization.split(" ");
        if (parts.length === 2 && parts[0] === "Bearer") {
            token = parts[1];
        }
    }
    return token;
}
