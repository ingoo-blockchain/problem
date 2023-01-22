class CheckService {
  constructor({ checkRepository, jwt, salt }) {
    this.checkRepository = checkRepository;
    this.jwt = jwt;
    this.crypto = jwt.crypto;
    this.salt = salt;
  }

  async duplicate(data) {
    try {
      if (!(Object.keys(data).length === 1 && (data?.userid || data?.nickname))) throw "중복체크에 실패했습니다.";
      const result = await this.checkRepository.duplicateCheck(data);
      if (result) return { message: "중복된 값입니다.", duplicate: true };
      return { message: "수정이 가능합니다.", duplicate: false };
    } catch (e) {
      throw new Error(e);
    }
  }

  async login({ userid, userpw }) {
    try {
      if (!userid || !userpw) throw "아이디또는 비밀번호가 입력되지 않았습니다.";
      const hash = this.crypto.createHmac("sha256", this.salt).update(userpw).digest("hex");
      const user = await this.checkRepository.findLoginUser({ userid, userpw: hash });

      if (!user) throw { message: "아이디와 패스워드가 일치하지 않습니다.", isWrong: true };
      const result = { token: this.jwt.sign(user) };
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = CheckService;
