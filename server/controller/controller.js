const { bcrypt } = require("bcrypt")
const User = require('../module/schema')


//controller for register
exports.registerUser = async(req,res) => {
    try {

        //validate request
        if(!req.body){
            res.status(406).json({err:"You have ti fill the registration form"})
            return
        }

        let { email,password,passwordCheck,username } = req.body

        if(!email || !password || !passwordCheck)
            return res.status(406).json({err: "Not all fields have been entered"})
        if(password.length < 8)
            return res.status(406).json({err: "The Password need to be atleast 8 character long"})
        if(password !== passwordCheck)
            res.status(406).json({err: "Password must be same for verification"});

        //hashing password
        const hash = await bcrypt.hashSync(password,10)

        //using document structure
        const newUser = new User({
            email,
            password:hash,
            username
        })

        newUser
            .save(newUser)
            .then(register =>{
                res.json(register)
            })
            .catch(error => {
                res.status(406).json({err:error.message || "Something went wrong while registration"})
            })

    } catch (error) {
        res.status(500).json({err:error.message ||"Error while registration"})
    }
}

//controller for login
exports.login = (req,res) =>{

    try {

        // validate request
        if(!req.body){
            res.status(406).json({err: "You have to fill the email and password"})
            return;
        }

        //get user data
        const{ email, password} = req.body

        //validation
        if(!email || !password){
            return res.status(406).json({err:"Not all fields have been entered"})
        }

        const user = "";

        //compare password
        const isMatch = bcrypt.compare(password,user)
    
    
        res.json({email,isMatch})
        
    } catch (error) {
        res.status(500).json({err:error.message||"Error while Login"})
    }

}
