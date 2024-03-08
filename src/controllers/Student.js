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

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID inválido.'],
        });
      }

      const student = await StudentModel.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }

      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID inválido.'],
        });
      }

      const student = await StudentModel.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }

      await student.destroy();
      return res.json({
        deleted: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID inválido.'],
        });
      }

      const student = await StudentModel.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Aluno não encontrado.'],
        });
      }

      const newData = await student.update(req.body);
      return res.json(newData);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new Student();
