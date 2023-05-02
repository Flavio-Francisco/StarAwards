"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const user_1 = require("./routes/user");
const userAdm_1 = require("./routes/userAdm");
const premios_1 = require("./routes/premios");
const premios_usuario_1 = require("./routes/premios-usuario");
const server = (0, fastify_1.fastify)();
server.register(user_1.User);
server.register(userAdm_1.UserAdm);
server.register(premios_1.Premios);
server.register(premios_usuario_1.PremiosUser);
server.listen({ port: 3333 }, (error, adess) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log("servidor rodando", adess);
    }
});
