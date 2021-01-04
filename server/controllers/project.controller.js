const Project = require("../models/project.model");

// GET ALL
const getAllProjects = async (req, res) => {
  await Project.find()
    .populate("items")
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json(err));
};
// GET ONE
const getProjectsById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId);
        res.status(200).json(project);
      } catch (err) {
        res.status(500).json(err);
      }
};
// CREATE NEW 
const createNewProject = async (req, res) => {
    const project = new Project(req.body);

    project.save((err, project) => {
        if (err) {
        console.log("error", err);
        res.status(400).json(err);
        } else res.status(201).json(project);
    });
};

// UPDATE
const updateProject = async (req, res) => {
  try {
    let updatedProject = await Project.updateOne(
      { _id: req.params.projectId },
      {
        $set: {
          projectName: req.body.projectName,
          imageId: req.body.projectName,
          description: req.body.description,
          roomId: req.body.roomId,
          category: req.body.category,
          items: req.body.items
        },
      }
    );
    res.status(200).json({ message: "ok" });
  } catch (err) {
    res.status(500).json(err);
  }
};


// DELETE

const deleteProject = async (req, res) => {
    try {
      const removedProject = await Project.deleteOne({ _id: req.params.projectId });
      res.status(200).json({message: "project deleted"});
    } catch (err) {
      res.status(500).json(err);
    }
  };
module.exports = {
    getAllProjects,
    getProjectsById,
    createNewProject,
    updateProject,
    deleteProject
};