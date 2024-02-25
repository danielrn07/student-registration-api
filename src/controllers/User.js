import UserModel from '../models/User';

class User {
  async store(req, res) {
    try {
      const newUser = await UserModel.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await UserModel.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new User();
