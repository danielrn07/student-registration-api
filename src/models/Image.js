import Sequelize, { Model } from 'sequelize';

export default class Image extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo originalname deve ser preenchido.',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo filename deve ser preenchido.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associeate(models) {
    this.belongsTo(models.Students, { foreignKey: 'student_id' });
  }
}
