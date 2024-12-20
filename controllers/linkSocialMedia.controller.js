const LinkSocialMedia = require("../models/linkSocialMedia.model");

const getLinkSocialMedia = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const linkSocialMedia = await LinkSocialMedia.find({})
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalDocuments = await LinkSocialMedia.countDocuments();
    const totalPages = Math.ceil(totalDocuments / limit);

    res.status(200).json({
      status: 200,
      message: "Success",
      data: linkSocialMedia,
      meta: { currentPage: Number(page), totalPages, totalDocuments },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSocialMediaDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const socialMedia = await LinkSocialMedia.findById(id);

    if (!socialMedia) {
      return res.status(404).json({ message: "Social Media not found" });
    }

    res.status(200).json({ status: 200, message: "Success", data: socialMedia });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createLinkSocialMedia = async (req, res) => {
  try {
    const linkSocialMedia = await LinkSocialMedia.create(req.body);
    res.status(201).json({ status: 201, message: "Social Media created", data: linkSocialMedia });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSocialMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const socialMedia = await LinkSocialMedia.findByIdAndUpdate(id, req.body, { new: true });

    if (!socialMedia) {
      return res.status(404).json({ message: "Social Media not found" });
    }

    res.status(200).json({ status: 200, message: "Social Media updated", data: socialMedia });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSocialMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const socialMedia = await LinkSocialMedia.findByIdAndDelete(id);

    if (!socialMedia) {
      return res.status(404).json({ message: "Social Media not found" });
    }

    res.status(200).json({ status: 200, message: "Social Media deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLinkSocialMedia,
  createLinkSocialMedia,
  getSocialMediaDetail,
  updateSocialMedia,
  deleteSocialMedia,
};
