import express from "express"
 
 
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
 *                   description: The user ID. 
 */
 export function all( req:express.Request, res:express.Response ): express.Response<any, Record<string, any>> {
        return res.send( "all" ).status(200)  
} 
 
 export function create ( req:express.Request, res:express.Response ) {
    return res.send( "create" ).status(200)  
}   

 export function update ( req:express.Request, res:express.Response ) {
    return res.send( "update" ).status(200)  
}   
  
 export function _delete( req:express.Request, res:express.Response ) {
    return res.send( "_delete" ).status(200)  
}   
  


