const Project = require("../models/Project");

module.exports = {
  async store(req, res) {
    const { title } = req.body;

    const project = await Project.create({ title });

    return res.status(201).send(project);
  },

  async index(req, res) {
    const project = await Project.find();

    return res.status(200).send(project);
  },

  async update(req, res) {
    const { title } = req.body;
    const { id } = req.params;

    await Project.findByIdAndUpdate(id, { title });

    return res.status(200).send({
      msg: `Project with id:${id} was changed your title`
    });
  },

  async destroy(req, res) {
    const { id } = req.params;

    await Project.findByIdAndDelete(id);

    return res.status(200).send({
      msg: `Project with id:${id} was deleted`
    });
  },
};
