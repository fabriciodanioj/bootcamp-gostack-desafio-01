const Project = require('../models/Project')

const verifyIfProjectExists = async (req, res, next) => {
  const { id } = req.params;

  const verify = await Project.findById(id);

  if(!verify) {
    return res.status(400).send({ msg: "This id not exists "})
  }

  next();
}

module.exports = verifyIfProjectExists;