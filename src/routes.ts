import { Router } from 'express'


const router = Router()

router.get("/", (req, res ) =>  res.send("Hi, I'm api test!!") )
router.get("/api", (req, res ) =>  res.send("I'm api!") )
 
  
export default router 