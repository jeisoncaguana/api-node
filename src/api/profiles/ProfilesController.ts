import express from "express"
import { ListaPerfiles } from "../../public/ListaPerfiles"
import { ProfileModel } from "./models/profile"
import profiles from "./routes"
 
 
/**
 * @swagger
 * profiles/all:
 *  get:
 *   summary: Lista perfiles
 *   responses:
 *    '200':
 *      description: Lista un array de perfiles
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *               id:
 *                   type: integer
 *                   description: Id del perfil.
 *               description:
 *                   type: string
 *                   description: Rango del perfil.
 
 * profiles/filterprofiles:
 *  get:
 *   summary: Lista de perfiles por Rango
 *   responses:
 *    '200':
 *      description: Lista un array de perfiles por Rango
 *      content:
 *       application/json:
 *          schema:
 *              type: object
 *              properties:
 *               id:
 *                   type: integer
 *                   description: Id del perfil.
 *               description:
 *                   type: string
 *                   description: Rango del perfil.
 
 */
 export function all( req:express.Request, res:express.Response ): express.Response<any, Record<string, any>> {

    
    let profiles:ProfileModel[] = ListaPerfiles
    
     return res.send({
            status:"200 OK",
            message:"Lista de Perfiles",
            type:"success",
            data: profiles
        }).status(200)  
} 

export function filterprofiles ( req:express.Request, res:express.Response ): express.Response<any, Record<string, any>> {
    
    console.log(req.query.description)
    let profileQuery = req.query.description;

    let profiles:ProfileModel[] = []
    ListaPerfiles.forEach((element:ProfileModel) => {
        profiles.push({
            id: element.id,
            description: element.description,
        })
    });

    // console.log(req.query.status)
    // console.log(profiles)
    
    var FiltroPerfiles = profiles.filter((element:ProfileModel)=>{
        return element.description == profileQuery
    });

    // console.log(FiltroPerfiles)
    
    return res.send({
            status:"200 OK",
            message:"Lista de Perfiles",
            type:"success",
            data: FiltroPerfiles
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
  


