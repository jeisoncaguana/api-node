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
 
 * users/filteruser:
 *  get:
 *   summary: Lista usuarios por status
 *   responses:
 *    '200':
 *      description: Lista un array de usuario por status
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
 *               porfile_id:
 *                   type: integer
 *                   description: Id de Perfil
 *               birth_date:
 *                   type: string
 *                   format: date
 *                   description: Edad del usuario.
 *               status:
 *                   type: boolean 
 *                   description: Estado del usuario (Activo/Inactivo) 
 

*/
 export function all( req:express.Request, res:express.Response ): express.Response<any, Record<string, any>> {

    
    let users:UserModel[] = []
    ListaUsuarios.forEach((element:UserModel) => {
        users.push({
            id: element.id,
            name: element.name,
            profile_id: element.profile_id,
            birth_date: element.birth_date,
            status: element.status
        })
    });

    
     return res.send({
            status:"200 OK",
            message:"Lista de Usuarios",
            type:"success",
            data:users
        }).status(200)  
} 
 
export function filterUser( req:express.Request, res:express.Response ): express.Response<any, Record<string, any>> {

    
    
    let stateQuery = Boolean(req.query.status);

    let users:UserModel[] = []
    ListaUsuarios.forEach((element:UserModel) => {
        users.push({
            id: element.id,
            name: element.name,
            profile_id: element.profile_id,
            birth_date: element.birth_date,
            status: element.status
        })
    });

    // console.log(req.query.status)
    // console.log(users)
    
    var FiltroUsuarios = users.filter((element:UserModel)=>{
        return element.status == stateQuery
    });

    //console.log(FiltroUsuarios)
    
    return res.send({
            status:"200 OK",
            message:"Lista de Usuarios",
            type:"success",
            data:FiltroUsuarios
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
  


