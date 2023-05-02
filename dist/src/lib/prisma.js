"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
// criando uma única estância do prisma para toda aplicação
exports.prisma = new client_1.PrismaClient({
    log: ['query'],
});
