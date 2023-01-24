class UserRepository {
    constructor({ User}){
        this.User = User;
    }
    async addUser(payload){
        try{
            const user = await this.User.create(payload, {raw:true});
            console.log("repos", user);
            return user;
        }catch(e){
            throw new Error(e);
        }
    }

    async getInfo(userId){
        try{
            const user = await this.User.findOne({
                raw : true,
                where : {
                    userId,
                },
            })
            console.log("info", user);
            return user
        }catch(e){
            throw new Error(e);
        }
    }
}

module.exports = UserRepository;