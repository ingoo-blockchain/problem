class AuthRepository {
    constructor({ User }){
        this.User = User;
    }

    async getSignIn({userId, userPw}){
        try{
            const user = await this.User.findOne({
                raw : true,
                // 특정 Field 선택
                attributes : ['userId', 'userName', 'userPw'],
                // // 특정 필드 제외 모두
                // attributes : {exclude : ["userPw"]},
                where : {
                    userId, userPw
                }
            })        
            return user;
        }catch(e){
            throw new Error(e)
        }
    }
}

module.exports = AuthRepository;
