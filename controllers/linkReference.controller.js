const LinkReference = require("../models/linkReference.model");

const getLinkRefernces = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const linkReferences = await LinkReference.find({})
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalDocuments = await LinkReference.countDocuments();
    const totalPages = Math.ceil(totalDocuments / limit);

    res.status(200).json({
      status: 200,
      message: "Success",
      data: linkReferences,
      meta: { currentPage: Number(page), totalPages, totalDocuments },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReferenceDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const reference = await LinkReference.findById(id);

    if (!reference) {
      return res.status(404).json({ message: "Reference not found" });
    }

    res.status(200).json({ status: 200, message: "Success", data: reference });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createLinkReference = async (req, res) => {
  try {
    const linkReference = await LinkReference.create(req.body);
    res.status(201).json({ status: 201, message: "Reference created", data: linkReference });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateReference = async (req, res) => {
  try {
    const { id } = req.params;
    const reference = await LinkReference.findByIdAndUpdate(id, req.body, { new: true });

    if (!reference) {
      return res.status(404).json({ message: "Reference not found" });
    }

    res.status(200).json({ status: 200, message: "Reference updated", data: reference });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteReference = async (req, res) => {
  try {
    const { id } = req.params;
    const reference = await LinkReference.findByIdAndDelete(id);

    if (!reference) {
      return res.status(404).json({ message: "Reference not found" });
    }

    res.status(200).json({ status: 200, message: "Reference deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLinkRefernces,
  createLinkReference,
  getReferenceDetail,
  updateReference,
  deleteReference,
};
