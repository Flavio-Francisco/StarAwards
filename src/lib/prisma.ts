import { PrismaClient } from "@prisma/client";

// criando uma única estância do prisma para toda aplicação

export const prisma = new PrismaClient({
    log:['query'],
})