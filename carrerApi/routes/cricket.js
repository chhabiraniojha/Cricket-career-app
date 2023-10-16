const express=require("express");
const cricketController=require("../controller/cricket")

const router=express.Router();


router.post("/post-cricketer",cricketController.postCricketer);
router.get("/get-cricketer/:name",cricketController.getCricketer);
router.put("/edit-cricketer/:name",cricketController.editCricketer)


module.exports=router;