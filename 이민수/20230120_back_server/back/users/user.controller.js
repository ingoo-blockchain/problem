class UserController {
  constructor({ userService }) {
    this.userService = userService;
  }

  async getUser(req, res, next) {
    try {
      if (!req.headers.authorization) throw new Error("Token is not available");
      const [type, token] = req.headers.authorization.split(" ");
      if (type.toLowerCase() !== "bearer") throw new Error("Token Type Error");
      const user = await this.userService.whoami(token);
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }

  async postSignup(req, res, next) {
    try {
      const user = await this.userService.signup(req.body);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }

  async putUser(req, res, next) {
    try {
      if (!req.headers.authorization) throw new Error("Token is not available");
      const [type, token] = req.headers.authorization.split(" ");
      if (type.toLowerCase() !== "bearer") throw new Error("Token Type Error");
      const data = req.body;
      const user = await this.userService.changeme({ token, data });
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = UserController;
