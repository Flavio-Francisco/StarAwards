
import { error, log } from 'console';
import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma';



export async function User(fastify:FastifyInstance){
    fastify.post('/users', async (resquest, reply)=>{

          // criando tipagem com zod

        const type = z.object({
              email : z.string().email(),
              password: z.string(),          
            })

             //recebendo dados de login

       const dados_usuario = type.parse(resquest.body)

        //fazendo consulta no banco de dados

       const usuarioPrisma = await prisma.user.findMany({
          select:{
            name:true,
            email:true,
            password: true,
          }
       })

       // colocando os dados do usuario em um arry
        const [usuario] = usuarioPrisma;

       // validando usuario

       if(dados_usuario.password != usuario.password){
        console.error(error)
        process.exit(1)
       }else{
         // inserindo informações do usuario no token
        const token = fastify.jwt.sign({
            name: usuario.name
        },{
            // o sub é, quem estar fazendo o login
            sub: usuario.password,
            //definindo a data de expiração do token
            expiresIn:'1 day'
             
        })
        return {token}
       }
       
    })
}

