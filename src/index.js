import 'dotenv/config'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());

server.get('/ping', (req, resp) =>{
    resp.send('pong');
})

server.get('/dobro/:numero', (req, resp) =>{
    const numero = Number(req.params.numero);

    const s = numero * 2;

    resp.send({
        dobro:s
    });
})



server.listen(process.env.PORT, 
                () => console.log(`API online na porta ${process.env.PORT}`))

