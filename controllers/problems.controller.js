//controller  use for responsible for handling the business logic of the application,
//specifically in terms of responding to requests and managing data interactions.

const Problem = require("../models/problem.model");

const getProblem = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query; // Default to page 1 and limit 10 if not provided

    const problem = await Problem.find({})
      .skip((page - 1) * limit) // Skip documents for previous pages
      .limit(Number(limit)); // Limit the number of documents returned

    const totalDocuments = await Problem.countDocuments(); // Get total number of documents
    const totalPages = Math.ceil(totalDocuments / limit); // Calculate total pages

    res.status(200).json({
      status: 200,
      message: "Success",
      data: problem,
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
    res.status(200).json({ status: 200, message: "Success", data: problem });
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

const createProblem = async (req, res) => {
  try {
    const problem = await Problem.create(req.body);
    res.status(200).json(problem);
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProlem = async (req, res) => {
  try {
    const { id } = req.params;
    const problem = await Problem.findByIdAndUpdate(id, req.body);

    if (!problem) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updateProblem = await Problem.findById(id);
    res.status(200).json(updateProblem);
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

const deleteProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const problem = await Problem.findByIdAndDelete(id);

    if (!problem) {
      return res.status(404).json({ message: "Reference not found" });
    }

    res.status(200).json("Reference has been deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

module.exports = {
  getProblem,
  getProblemDetail,
  createProblem,
  updateProlem,
  deleteProblem,
};
