import jwt from 'jsonwebtoken';
import UserModel from '../models/User';

class Token {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas.'],
      });
    }

    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        errors: ['Usuário não existe.'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(400).json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, user: { name: user.name, id, email } });
  }
}

export default new Token();
