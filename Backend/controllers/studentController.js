import Student from '../models/Student.js';

// Create student
export const createStudent = async (req, res) => {
  const { name, rollNo, course, marks } = req.body;

  try {
    const student = await Student.create({
      name, rollNo, course, marks,
      createdBy: req.user._id
    });
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all students
export const getStudents = async (req, res) => {
  const students = await Student.find({ createdBy: req.user._id });
  res.status(200).json(students);
};

// Get single student
export const getStudentById = async (req, res) => {
  const student = await Student.findOne({
    _id: req.params.id,
    createdBy: req.user._id,
  });

  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json(student);
};

// Update
export const updateStudent = async (req, res) => {
  const student = await Student.findOneAndUpdate(
    { _id: req.params.id, createdBy: req.user._id },
    req.body,
    { new: true }
  );

  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json(student);
};

// Delete
export const deleteStudent = async (req, res) => {
  const student = await Student.findOneAndDelete({
    _id: req.params.id,
    createdBy: req.user._id,
  });

  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json({ message: 'Student deleted successfully' });
};
