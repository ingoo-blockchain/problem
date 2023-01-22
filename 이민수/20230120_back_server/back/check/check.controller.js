class CheckController {
  constructor({ checkService }) {
    this.checkService = checkService;
  }

  async duplicateCheck(req, res, next) {
    try {
      const data = req.query;
      const result = await this.checkService.duplicate(data);
      res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  }

  async postLogin(req, res, next) {
    try {
      const { userid, userpw } = req.body;

      const result = await this.checkService.login({ userid, userpw });
      res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = CheckController;
