import { Router } from 'express'
import { body } from 'express-validator'
import { all, filterprofiles } from './ProfilesController'

 
const profiles = Router()


profiles.get('/all' , all )
profiles.get('/filterprofiles', filterprofiles)

  
export default profiles