import UserModel from '../models/User';

class User {
  async store(req, res) {
    try {
      const newUser = await UserModel.create(req.body);
      const { id, name, email } = newUser;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      const user = await UserModel.findByPk(req.userID);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado.'],
        });
      }

      const newData = await user.update(req.body);
      const { id, name, email } = newData;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await UserModel.findByPk(req.userID);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado.'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new User();
