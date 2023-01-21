// Back-end API RESTful
import Fastify from 'fastify' //framework para criar a API RESTful
import cors from '@fastify/cors'
import { appRoutes } from './routes'
/**
 * Métodos HTTP: Get, Post, Put, Patch, Delete
 */
const app = Fastify() //criando as rotas

app.register(cors) //registrando o cors para permitir o acesso externo.
app.register(appRoutes)//registrando as rotas

app.listen({ //iniciando o servidor na porta 3333
    port: 3333,
})