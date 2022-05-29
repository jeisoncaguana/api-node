import express from "express"
import { validationResult } from "express-validator"
import { ConnectionPool } from "mssql"
import { logger } from "../../config/logger"
import DBUsers from "../../db/usersDB" 
 
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
 export function all( req:express.Request, res:express.Response ) {

    const conn = DBUsers.start()

    const stringQuery = 'SELECT * FROM [test].[vwUsuarios]' 

    conn.connect()
    .then( ( pool:ConnectionPool ) => {
        return pool.request().query(  stringQuery )
    })
    .then( ( result:any ) => { 
        return res.send({
            status:"200 OK",
            message:"Lista de Uusarios",
            type:"success",
            data:result.recordsets
        }).status(200)  
    })
    .catch( ( err:ConnectionPool ) => {
        logger.error(err)
         return res.status(503).send({
            status: '503 Service Unavailable',
            type:'error',
            message: `${err}`
        })
    })
    .finally( ( f:ConnectionPool ) => DBUsers.stop() )       


    
 
} 
 
 export function create ( req:express.Request, res:express.Response ) {

    
    const errors = validationResult(req)
    if (!errors.isEmpty()) 
        return res.status(400).json({ 
            status:"400 Bad Request",
            message:"Validacion de errores",
            type:"error",
            errors: errors.array() 
        })



    const { IDPERFILUSUARIO, CORREO, USERNAME, PASSWORD, ACTIVO } = req.body

    const stringQuery = `EXECUTE [test].[iae_usuario]    @accion                = 'I'
                                                        ,@prmidperfilusuario    = ${IDPERFILUSUARIO}
                                                        ,@prmcorreo             = '${CORREO}'
                                                        ,@prmusername           = '${USERNAME}'
                                                        ,@prmpassword           = '${PASSWORD}'
                                                        ,@prmactivo             = ${ACTIVO}`



    const conn = DBUsers.start()
    conn.connect()
    .then( ( pool:ConnectionPool ) => {
        return pool.request().query(  stringQuery )
    })
    .then( ( result:any ) => { 
        return res.send({
            status:"200 OK",
            message:"Crea un Uusarios",
            type:"success",
            data:result.recordsets[0]
        }).status(200)  
    })
    .catch( ( err:ConnectionPool ) => {
        logger.error(err)
         return res.status(503).send({
            status: '503 Service Unavailable',
            type:'error',
            message: `${err}`
        })
    })
    .finally( ( f:ConnectionPool ) => DBUsers.stop() ) 

}   

 export function update ( req:express.Request, res:express.Response ){
    return res.send( "update" ).status(200)  
}   
  
 export function _delete( req:express.Request, res:express.Response ){
    const errors = validationResult(req)
    if (!errors.isEmpty()) 
        return res.status(400).json({ 
            status:"400 Bad Request",
            message:"Validacion de errores",
            type:"error",
            errors: errors.array() 
        })



    const { IDUSUARIO } = req.body

    const stringQuery = `EXECUTE [test].[iae_usuario]    @accion        = 'E'
                                                        ,@prmidusuario  = ${Number(IDUSUARIO)}`



    const conn = DBUsers.start()
    conn.connect()
    .then( ( pool:ConnectionPool ) => {
        return pool.request().query(  stringQuery )
    })
    .then( ( result:any ) => { 
        return res.send({
            status:"200 OK",
            message:"elimina un Uusarios",
            type:"success",
            data:result.recordsets[0]
        }).status(200)  
    })
    .catch( ( err:ConnectionPool ) => {
        logger.error(err)
         return res.status(503).send({
            status: '503 Service Unavailable',
            type:'error',
            message: `${err}`
        })
    })
    .finally( ( f:ConnectionPool ) => DBUsers.stop() ) 

}   
  


