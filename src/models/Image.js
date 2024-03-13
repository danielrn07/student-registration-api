import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

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
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
}
