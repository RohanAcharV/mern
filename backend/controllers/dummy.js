const UserModel = require("../models/UserModel")

module.exports.getuser=async(req,res)=>{
    const email=req.params.email;
    const user=await UserModel.find({email})
    res.send(user)
}

module.exports.saveuser = async(req,res)=>{
    try {
        const userData = req.body; 
        const user = new UserModel(userData);
    
        await user.save();
    
        res.status(200).json({ message: 'user saved successfully' });
      } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Failed to save user' });
      }
}

module.exports.checkuser=async(req,res)=>{
  try {
    const { email } = req.query;
    const exists = await UserModel.exists({ email });

    res.status(200).json({ exists });
  } catch (error) {
    console.error('Error checking email:', error);
    res.status(500).json({ error: 'Failed to check email' });
  }
}