const {Router} = require("express")
const {getmessg,addmessg}=require("../controllers/MessgController")
const router =Router()

router.get("/getmessg",getmessg);
router.post("/addmessg",addmessg);
module.exports=router;
