const Interview = require("../models/Interview.model");

const getInterview = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;

    const interviews = await Interview.find({})
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalDocuments = await Interview.countDocuments();
    const totalPages = Math.ceil(totalDocuments / limit);

    res.status(200).json({
      status: 200,
      message: "Success",
      data: interviews,
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

    if (!interview) {
      return res.status(404).json({ message: "Interview not found" });
    }

    res.status(200).json({ status: 200, message: "Success", data: interview });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createInterview = async (req, res) => {
  try {
    const interview = await Interview.create(req.body);
    res.status(201).json({ status: 201, message: "Interview created", data: interview });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateInterview = async (req, res) => {
  try {
    const { id } = req.params;
    const interview = await Interview.findByIdAndUpdate(id, req.body, { new: true });

    if (!interview) {
      return res.status(404).json({ message: "Interview not found" });
    }

    res.status(200).json({ status: 200, message: "Interview updated", data: interview });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteInterview = async (req, res) => {
  try {
    const { id } = req.params;
    const interview = await Interview.findByIdAndDelete(id);

    if (!interview) {
      return res.status(404).json({ message: "Interview not found" });
    }

    res.status(200).json({ status: 200, message: "Interview deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getInterview,
  createInterview,
  getInterviewDetail,
  updateInterview,
  deleteInterview,
};
