import fastify from "fastify";

const app = fastify();

app.get('/', (req, res) => {
    return {
        user: 'David Anderson',
        email: 'david******gmail.com'
    }
});

/*
Os exemplos acima e os exemplos subseqüentes neste documento são padronizados 
para ouvir apenas na 127.0.0.1 interface localhost. Para escutar em todas as 
interfaces IPv4 disponíveis, o exemplo deve ser modificado para escutar 0.0.0.0
reference: 
https://www.fastify.io/docs/latest/Guides/Getting-Started/#your-first-server
*/
app.listen({port: 3000, host: '0.0.0.0'});