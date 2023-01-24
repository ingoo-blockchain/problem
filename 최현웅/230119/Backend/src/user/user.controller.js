class UserController {
    constructor({userService}){
        this.userService = userService;
    }
    async Inform(req,res,next){
        try{
            if(!req.headers.authorization)throw new Error("SignIn is Invalid, Please Sign in your account");
            const [type,token] = req.headers.authorization.split(" ");
            if (type.toLowerCase() !== "bearer") throw new Error ("Error occurred Invalid Authorization. Please close the browser and then try again.");

            const user = await this.userService.me(token);
            
            console.log("controlToken", token);
            console.log("control", user);

            res.json(user);
        }catch(e){
            next(e);
        }
    }

    async postSignUp(req,res,next){
        try {
            const {userId, userPw, userName, provider, userBirth, userGender, userPhone, userEmail, userAddress} = req.body;
            const user = await this.userService.SignUp({userId, userPw, userName, provider, userBirth, userGender, userPhone, userEmail, userAddress});
            res.status(201).json(user);
        }catch(e){
        next(e);
        }
    }
}
module.exports = UserController;
