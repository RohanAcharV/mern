const MessgModel = require("../models/Messgmodel")


module.exports.getmessg=async(req,res)=>{
  const messg=await MessgModel.find()
  res.send(messg)
}

module.exports.addmessg=async(req,res)=>{
    try{
        const newmessg=req.body;
        const messg=new MessgModel(newmessg);
    
        await messg.save();
        res.status(200).json({ message: 'user saved successfully' });
    
    }
    catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'Failed to save message' });
      }
}