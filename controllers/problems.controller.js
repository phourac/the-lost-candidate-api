const Problem = require("../models/problem.model");

const getProblem = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;

    const problems = await Problem.find({})
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalDocuments = await Problem.countDocuments();
    const totalPages = Math.ceil(totalDocuments / limit);

    res.status(200).json({
      status: 200,
      message: "Success",
      data: problems,
      meta: { currentPage: Number(page), totalPages, totalDocuments },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProblemDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const problem = await Problem.findById(id);

    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    res.status(200).json({ status: 200, message: "Success", data: problem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProblem = async (req, res) => {
  try {
    const problem = await Problem.create(req.body);
    res.status(201).json({ status: 201, message: "Problem created", data: problem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const problem = await Problem.findByIdAndUpdate(id, req.body, { new: true });

    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    res.status(200).json({ status: 200, message: "Problem updated", data: problem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const problem = await Problem.findByIdAndDelete(id);

    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    res.status(200).json({ status: 200, message: "Problem deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProblem,
  getProblemDetail,
  createProblem,
  updateProblem,
  deleteProblem,
};
