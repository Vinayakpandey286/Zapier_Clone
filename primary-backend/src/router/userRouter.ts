import { Router } from "express";

const router = Router()

router.post('/signin', ()=>{
    console.log('signin')
})
router.post('/signup', ()=>{
    console.log('signup')
})



export default router