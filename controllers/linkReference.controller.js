//controller  use for responsible for handling the business logic of the application,
//specifically in terms of responding to requests and managing data interactions.

const LinkReference = require("../models/linkReference.model");

const getLinkRefernces = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10 if not provided

    const linkReferences = await LinkReference.find({})
      .skip((page - 1) * limit) // Skip documents for previous pages
      .limit(Number(limit)); // Limit the number of documents returned

    const totalDocuments = await LinkReference.countDocuments(); // Get total number of documents
    const totalPages = Math.ceil(totalDocuments / limit); // Calculate total pages

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
    res.status(200).json({ status: 200, message: "Success", data: reference });
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

const createLinkReference = async (req, res) => {
  try {
    const linkReference = await LinkReference.create(req.body);
    res.status(200).json(linkReference);
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateReference = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await LinkReference.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updateReference = await LinkReference.findById(id);
    res.status(200).json(updateReference);
    // res.send(req.body); // use to respose data  from body
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send();
};

const deleteReference = async (req, res) => {
  try {
    const { id } = req.params;
    const reference = await LinkReference.findByIdAndDelete(id);

    if (!reference) {
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
  getLinkRefernces,
  createLinkReference,
  getReferenceDetail,
  updateReference,
  deleteReference,
};
