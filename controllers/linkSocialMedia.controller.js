//controller  use for responsible for handling the business logic of the application,
//specifically in terms of responding to requests and managing data interactions.

const LinkSocialMedia = require("../models/linkSocialMedia.model");

const getLinkSocialMedia = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10 if not provided

    const linkSocialMedia = await LinkSocialMedia.find({})
      .skip((page - 1) * limit) // Skip documents for previous pages
      .limit(Number(limit)); // Limit the number of documents returned

    const totalDocuments = await LinkSocialMedia.countDocuments(); // Get total number of documents
    const totalPages = Math.ceil(totalDocuments / limit); // Calculate total pages

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
    res
      .status(200)
      .json({ status: 200, message: "Success", data: socialMedia });
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

const createLinkSocialMedia = async (req, res) => {
  try {
    const linkSocialMedia = await LinkSocialMedia.create(req.body);
    res.status(200).json(linkSocialMedia);
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSocailMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const socialMedia = await LinkSocialMedia.findByIdAndUpdate(id, req.body);

    if (!socialMedia) {
      return res.status(404).json({ message: "Social Media not found" });
    }

    const updateSocialMedia = await LinkSocialMedia.findById(id);
    res.status(200).json(updateSocialMedia);
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

const deleteSocialMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const socialMedia = await LinkSocialMedia.findByIdAndDelete(id);

    if (!socialMedia) {
      return res.status(404).json({ message: "Social Media not found" });
    }

    res.status(200).json("Social Media has been deleted");
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
  getLinkSocialMedia,
  createLinkSocialMedia,
  getSocialMediaDetail,
  updateSocailMedia,
  deleteSocialMedia,
};
