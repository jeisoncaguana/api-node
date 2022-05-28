import express from "express"
import { ListaUsuarios } from "../../public/ListaUsuarios"
import { UserModel } from "./models/user"
 
 
/**
 * @swagger
 * users/all:
 *  get:
 *   summary: Lista usuarios
 *   responses:
 *    '200':
 *      description: Lista un array de usuario 
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *               id:
 *                   type: integer
 *                   description: Id del usuario.
 *               name:
 *                   type: string
 *                   description: Nombre del usuario.
 *               birth_date:
 *                   type: string
 *                   format: date
 *                   description: Edad del usuario.
 */
 export function all( req:express.Request, res:express.Response ): express.Response<any, Record<string, any>> {

    
    const users:UserModel[] = ListaUsuarios
    
     return res.send({
            status:"200 OK",
            message:"Lista de Uusarios",
            type:"success",
            data:users
        }).status(200)  
} 
 
 export function create ( req:express.Request, res:express.Response ): express.Response<any, Record<string, any>> {
    return res.send( "create" ).status(200)  
}   

 export function update ( req:express.Request, res:express.Response ): express.Response<any, Record<string, any>> {
    return res.send( "update" ).status(200)  
}   
  
 export function _delete( req:express.Request, res:express.Response ): express.Response<any, Record<string, any>> {
    return res.send( "_delete" ).status(200)  
}   
  


