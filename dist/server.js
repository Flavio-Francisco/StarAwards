"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const server = (0, fastify_1.fastify)();
server.get('/', (reponse, reply) => {
    return "servidor funciona mesmo!";
});
server.listen({ port: 3333 }, (error, adess) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log("servidor rodando", adess);
    }
});
