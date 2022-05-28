import express, { Handler } from "express"
import Jwt from "jsonwebtoken"

import { logger } from "../config/logger"
import { environment } from "../config/environment"
 
/**
 * 
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const JWToken: Handler = async (req: express.Request, res: express.Response, next) => {

   
     try {
        const auth = req.headers["authorization"]
        
        if (!auth) 
            return res.status(401).end({})
       
        const bearer = auth.split(" ")
        const token = bearer[1]
        const user:any = Jwt.verify(token, environment.SECRET_KEY) || false
        
        return next()

    } catch (err) {
        logger.error(`middleware/controllet.ts/JWTAuth, ${err}`)
        return res.status(401).end({})
    }
}

/**
 * 
 * @param data 
 * @returns 
 */
export const createToken = ( data:any, email:string ) => {
    // console.log(Number(data.idusuario));
    const token = Jwt.sign( { user_id: Number(data.idusuario), correo:email,  name: data.USERNAME} ,  environment.SECRET_KEY, { expiresIn: environment.TOKEN_EXPIRES_IN }) 
    return token
}

/**
 * 
 * @param email 
 * @returns 
 */
export const generatePasswordReset = ( email:string ) => {
    const chars = `${environment.SECRET_KEY}-${email}`;
    const string_length = 8;
    let password:string = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            password += chars.substring(rnum,rnum+1);
        }
    return password 
}


