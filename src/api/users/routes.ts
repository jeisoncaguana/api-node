import { Router } from 'express'
import { body } from 'express-validator'
import { all, create, _delete } from './UserController'

 
const users = Router()


users.get('/all' , all )  
users.post('/create' ,  body('IDPERFILUSUARIO').isNumeric(),
                        body('CORREO').isEmail(),
                        body('USERNAME').notEmpty(),
                        body('ACTIVO').notEmpty(),
                    create ) 

users.delete('/delete' ,  body('IDUSUARIO').isNumeric(),
                        _delete )  

  
export default users