import { Router } from "express";

const router = Router()

router.post('/zap', ()=>{
    console.log('zap')
})
router.get('/:zapId', ()=>{
    console.log('zpid')
})



export default router