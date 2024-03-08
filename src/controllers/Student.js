import StudentModel from '../models/Student';

class Student {
  async index(req, res) {
    const students = await StudentModel.findAll();
    res.json(students);
  }

  async store(req, res) {
    try {
      const newStudent = await StudentModel.create(req.body);

      const {
        id, name, email, age, weight, height,
      } = newStudent;

      return res.json({
        id, name, email, age, weight, height,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new Student();
