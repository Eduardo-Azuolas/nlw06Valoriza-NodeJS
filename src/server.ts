import "reflect-metadata";
import express from "express";
import { router } from "./routes"
import "./database";

//@types/express
const app = express()

app.use(express.json())

app.use(router)

/**
 *  GET => Buscar informação
 *  POST => Inserir (Criar) uma informação
 *  PUT => Alterar uma informação
 *  DELETE => Remover um dado
 *  PATCH => Alterar uma informação específica
*/

/**
 * Tipos de Parâmetro
 * Routes Params => http://localhost:3000/produtos/237427365
 * Query Params (não obrigatórios - utilizados pra filtro) => http://localhost:3000/produtos?name=teclado&description=tecladobom&
 * Body Params (utilizado em POST,PUT e PATCH)=> {
 *  "name": "teclado",
 *  "description": "teclado bom"
 * }
 */

//http://localhost:3000
app.listen(3000, () => console.log("Server is running"))