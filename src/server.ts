import fastify from "fastify";
import { userRoutes } from "./users.routes";

const app = fastify();

app.register(userRoutes);

/*
Os exemplos acima e os exemplos subseqüentes neste documento são padronizados 
para ouvir apenas na 127.0.0.1 interface localhost. Para escutar em todas as 
interfaces IPv4 disponíveis, o exemplo deve ser modificado para escutar 0.0.0.0
reference: 
https://www.fastify.io/docs/latest/Guides/Getting-Started/#your-first-server
*/

app.listen({port:3000, host: '0.0.0.0'});