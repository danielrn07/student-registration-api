import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 255],
            msg: 'O campo nome deve ser preenchido e não pode ter mais que 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Este e-mail já está cadastrado.',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: {
            msg: 'O campo idade deve ser preenchido com um número inteiro.',
          },
          notEmpty: {
            msg: 'O campo idade não pode ser vazio.',
          },
        },
      },
      weight: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'O campo peso deve ser preenchido com um número inteiro.',
          },
          notEmpty: {
            msg: 'O campo peso não pode ser vazio.',
          },
        },
      },
      height: {
        type: Sequelize.FLOAT,
        validate: {
          isFloat: {
            msg: 'O campo altura deve ser preenchido com um número inteiro.',
          },
          notEmpty: {
            msg: 'O campo altura não pode ser vazio.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Image, { foreignKey: 'student_id' });
  }
}
