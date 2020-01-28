const Project = require("../models/Project");

module.exports = {
  async update(req, res) {
    const { id } = req.params;
    const { task } = req.body;

    const { tasks } = await Project.findById(id);

    const project = await Project.findByIdAndUpdate(id, {
      tasks: [...tasks, task]
    });

    return res.status(201).send(project);
  }
};
