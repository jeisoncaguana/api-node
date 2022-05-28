import { Router } from 'express'
import { body } from 'express-validator'
import { all } from './UserController'

 
const users = Router()


users.get('/all' , all )  

  
export default users