import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors"
import cors from "cors"
import { router } from "./routes"
import "./database";

//@types/express
const app = express()
app.use(cors())

app.use(express.json())

app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3000, () => console.log("Server is running"))

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