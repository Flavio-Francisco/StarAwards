import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();


async function main() {
    const user = await prisma.user.create({
        data:{
            name:"Flávio Francisco",
            email:"flavio@silva.com",
            password:"1234",

            premiosRecebidosId:{
                create:{
                    name:"camisa",
                    modelo:"manga longa",
                    quatidade:1
                }
            }
        }
    })
    const premios = await prisma.premios.create({
        data:{
            name:"camisa",
            modelo: "manga longa",
            quatidade: 10
            
        }
    })
    const userAdm = await prisma.userAdm.create({
        data:{
            name:"Flavio Silva",
            email: "silva@flavio.com",
            password: "1234"
        }
    })
}
main()