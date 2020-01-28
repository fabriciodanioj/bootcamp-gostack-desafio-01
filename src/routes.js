const express = require("express");

const ProjectController = require("./controllers/ProjectController");
const TaskController = require("./controllers/TaskController");
const verifyIfProjectExists = require("./middlewares/verifyIfProjectExists");
const counterRequisitions = require("./middlewares/counterRequisitions");


const routes = express.Router();

routes.use(counterRequisitions);

// Project
routes.post("/projects", ProjectController.store);
routes.get("/projects", ProjectController.index);
routes.put("/projects/:id", verifyIfProjectExists, ProjectController.update);
routes.delete(
  "/projects/:id",
  verifyIfProjectExists,
  ProjectController.destroy
);

// Tasks
routes.put("/projects/:id/tasks", verifyIfProjectExists, TaskController.update);

module.exports = routes;
