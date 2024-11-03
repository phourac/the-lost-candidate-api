//controller  use for responsible for handling the business logic of the application,
//specifically in terms of responding to requests and managing data interactions.

const Interview = require("../models/Interview.model");

const getInterview = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query; // Default to page 1 and limit 10 if not provided

    const interview = await Interview.find({})
      .skip((page - 1) * limit) // Skip documents for previous pages
      .limit(Number(limit)); // Limit the number of documents returned

    const totalDocuments = await Interview.countDocuments(); // Get total number of documents
    const totalPages = Math.ceil(totalDocuments / limit); // Calculate total pages

    res.status(200).json({
      status: 200,
      message: "Success",
      data: interview,
      meta: { currentPage: Number(page), totalPages, totalDocuments },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getInterviewDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const interview = await Interview.findById(id);
    res.status(200).json({ status: 200, message: "Success", data: interview });
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

const createInterview = async (req, res) => {
  try {
    const interview = await Interview.create(req.body);
    res.status(200).json(interview);
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateInterview = async (req, res) => {
  try {
    const { id } = req.params;
    const interview = await Interview.findByIdAndUpdate(id, req.body);

    if (!interview) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updateInterview = await Interview.findById(id);
    res.status(200).json(updateInterview);
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

const deleteInterview = async (req, res) => {
  try {
    const { id } = req.params;
    const interview = await Interview.findByIdAndDelete(id);

    if (!interview) {
      return res.status(404).json({ message: "Reference not found" });
    }

    res.status(200).json("Reference has been deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

module.exports = {
  // getProducts,
  // getProductDetail,
  // createProduct,
  // updayteProduct,
  // deleteProduct,
  getInterview,
  createInterview,
  getInterviewDetail,
  updateInterview,
  deleteInterview,
};
