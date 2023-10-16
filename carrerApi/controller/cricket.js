const Cricketers=require("../models/cricket");

exports.postCricketer=async (req,res,next)=>{
    const cricketerDetails=req.body;
    const cricketer = await Cricketers.create(cricketerDetails);
    res.json(cricketer);
}

exports.getCricketer=async (req,res,next)=>{
    const name=req.params.name;
    const cricketer=await Cricketers.findAll({
        where: {
          name: name
        }
      });
    res.json(cricketer);  

}

exports.editCricketer=async (req,res,next)=>{
  const name=req.params.name;
  const updatedCricketer=req.body;
  const cricketer=await Cricketers.update(updatedCricketer, {
    where: {
      name: name,
    },
  });
   res.json(cricketer)
  // const cricketer = await Cricketers.create(cricketerDetails);
  // res.json(cricketer);
}