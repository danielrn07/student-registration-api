import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Student from '../models/Student';
import Image from '../models/Image';

const models = [User, Student, Image];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
