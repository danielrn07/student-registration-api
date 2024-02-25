import UserModel from '../models/User';

class User {
  async store(req, res) {
    try {
      const newUser = await UserModel.create(req.body);
      res.json(newUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new User();
