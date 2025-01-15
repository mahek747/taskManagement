const Task = require('../model/task.model');

const createTask = async (req, res) => {
  try {
    const { title, description, user } = req.body;

    const task = new Task({
      title,
      description,
      user,
    });

    await task.save();
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error });
  }
};

const getTasks = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const task = await Task.findById(id).populate('user', 'name email');

      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }

      return res.status(200).json(task);
    }

    const tasks = await Task.find().populate('user', 'name email');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving tasks', error });
  }
};

const updateTaskById = async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, completed, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error });
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTaskById,
  deleteTaskById,
};
