import { Router } from 'express'
import { body } from 'express-validator'
import { all, filterUser } from './UserController'

 
const users = Router()


users.get('/all' , all )  
users.get('/filteruser', filterUser )
  
export default users