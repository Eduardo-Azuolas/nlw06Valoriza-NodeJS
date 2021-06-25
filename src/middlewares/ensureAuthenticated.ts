import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
    ) {

        // Receber o token

        const authToken = request.headers.authorization

        // Validar se token esta preenchido

        if(!authToken) {
            return response.status(401).end()
        }

        // Utilizando o split para dividir a string em um array e retirar o 'Bearer' da chave e utilizar a segunda posição do array dentro da var token
        // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVkdWFyZG9AYXp1b2xhcy5jb20uYnIiLCJpYXQiOjE2MjQ1NTgyNDMsImV4cCI6MTYyNDY0NDY0Mywic3ViIjoiMzRlMmI0MmQtNzIyMS00MDYwLTg2ZDMtNzQzY2I2ZDUzZWE5In0.AytXd5X6lFoa5EIPmjMcGWNcrLFP7hs8TNFkHLAPzcE

        const [,token] = authToken.split(" ")

        
        try {
            // Validar se token é válido
            
            const { sub } = verify(token, "2ddbb1c5ac35a42dd2466f170b97aa21") as IPayload
        
            // Recuperar informações do usuário
            
            request.user_id = sub

            return next()
        } catch(err) {
            return response.status(401).end()
        }
        
        


    }