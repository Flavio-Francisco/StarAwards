import { fastify } from "fastify";
import jwt from '@fastify/jwt';
import { User } from "./routes/user";
import { UserAdm } from "./routes/userAdm";
import { Premios } from "./routes/premios";
import { PremiosUser } from './routes/premios-usuario';



const server = fastify();

// gerando chave secreta do usuario
server.register(jwt,{
  secret:'012345'  
})

server.register(User);
server.register(UserAdm);
server.register(Premios);
server.register(PremiosUser);

server.listen({port:3333},(error, adess)=>{
    if (error) {
        console.error(error);
       
    } else {
        console.log("servidor rodando",adess);
    }
});

