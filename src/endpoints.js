import {somar, dobro, temperatura, CalcularMedia, corPrimaria, ingresso, frequanciaCaracter, maiorNumero } from './searvice.js'
import { Router } from 'express'
const server = Router();


server.get('/ping', (req, resp) =>{
    resp.send('pong');
})

server.get('/dobro/:numero', (req, resp) =>{
    const numero = Number(req.params.numero);

    const d = dobro(numero);

    resp.send({
        dobro:d
    });
})

server.get('/somar', (req, resp)=>{

    try{
        let a = Number(req.query.a);
        let b = Number(req.query.b);
    
        const x = somar(a, b);
    
        resp.send({
            soma:x 
        })
    }catch(err){
        resp.send({
            erro:err.message
        })
    }

})

server.post('/somar', (req,resp)=>{
    try {
        const { a, b } = req.body;

        const x = somar(a, b);
    
        resp.send({
            soma:x
        })
    } catch (err) {
        resp.send({
            erro:err.message
        })
    }
})

server.get('/temperatura'), (req, resp) =>{
    try {
        let n = Number(req.query.n);

        const temp = temperatura(n);

        resp.send({
            febre:temp
        })

    } catch (err) {
        resp.send({
            erro:err.message
        })
    }
}

server.post('/media', (req,resp) =>{
    try {
        
        let n1 = req.body.n1;
        let n2 = req.body.n2;
        let n3 = req.body.n3;

        const nota = CalcularMedia(n1, n2, n3);

        resp.send({
            erro:nota
        })

    } catch (err) {
        resp.send({
            erro:err.message
        })
    }
})

server.get('/dia2/corprimaira/:cor', (req,resp) => {
    try {

        const { cor } = req.params;
        const primaria = corPrimaria(cor);

        resp.send({
            primaria:primaria
        })
        
    } catch (err) {
        resp.send({
            erro:err.message
        })
    }
})

server.post('/dia2/ingressocinema', (req, resp) =>{
    try {

        const {qtdInteiras, qtdMeias, diaSemana ,nacionalidade} = req.body;
        const total = ingresso(qtdInteiras, qtdMeias, diaSemana, nacionalidade);

        resp.send({
            total:total
        })

    } catch (err) {
        resp.send({
            erro:err.message
        })
    }
})

server.get('/dia2/freqcaractere/:texto/:caracter', (req, resp) =>{
    try {
        
        const{texto, caracter} = req.params;
        const freq = frequanciaCaracter(texto, caracter)

        resp.send({
            freq:freq
        })

    } catch (err) {
        resp.send({
            erro:err.message
        })
    }
})

server.post('/dia2/maiorNumero', (req, resp) => {
    try {
        const numeros = req.body;
        const maior = maiorNumero(numeros);
        resp.send({
            maior:maior
        })
        
    } catch (err) {
        resp.send({
            erro:err.message
        })
    }
})

export default server;