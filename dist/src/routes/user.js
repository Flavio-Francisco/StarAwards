"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const zod_1 = require("zod");
async function User(fastify) {
    fastify.post('/users', async (resquest, reply) => {
        // criando tipagem com zod
        const type = zod_1.z.object({
            dados_usuario: zod_1.z.object({
                name: zod_1.z.string(),
                passworod: zod_1.z.string(),
            })
        });
        const { dados_usuario } = type.parse(resquest.body);
    });
}
exports.User = User;
