import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggeJsDoc from 'swagger-jsdoc'

import { options } from './config/swagger'
import { environment } from './config/environment'
import router from './routes'
import { BOOTTelegraf } from './config/telegraf'
   

class Server {
    
    // define app 
    public app:express.Application
    
    constructor(){
        // init express 
        this.app = express()
        // init config 
        this.config()
    }
    config(){
        // add port 
        this.app.set('port', environment.PORT )
        // add middlewars and config app.
        this.app.use( express.json() )
        this.app.use( express.urlencoded({ extended: false }) )
        this.app.use( morgan('dev') )
        this.app.use( helmet() )
        this.app.use( compression() )  
        this.app.use( cors() )
        
        // init swagge doc 
        const docs = swaggeJsDoc( options )
        // init routes
        this.app.use( router )
        // this.app.use('/docs', swaggerUI.serve , swaggerUI.setup( docs ))

        // init boot  
        // new BOOTTelegraf()
    }       

    start(){
        const PORT = this.app.get('port')
        this.app.listen( PORT , () => {
            console.log( `Server in ${PORT}` )
        } )
    } 
}
const server = new Server()
server.start()