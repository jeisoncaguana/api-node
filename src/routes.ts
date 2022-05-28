import { Router } from 'express'
import { JWToken } from './middleware/JWToken'

import users from './api/users/routes'
 
const router = Router()

 router.get("/", (req, res ) =>  res.send("apinode-goapps v1.0") )
 router.use( '/users', users )  
  
export default router 