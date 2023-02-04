import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Dados inválidos'],
      });
    }

    const user = await User.findOne(
      { where: { email } },
    );

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe.'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida.'],
      });
    }

    if (user.status === false) {
      return res.status(401).json({
        errors: ['o usuário está inativo, verifique a situação com o Adm do sistema!'],
      });
    }

    const {
      id, nome,
    } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EPIRATION,
    });

    return res.json({
      user: {
        id,
        nome,
        email,

      },

      token,

    });
  }
}

export default new TokenController();
