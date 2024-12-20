const express = require("express");
// const Product = require("./models/product.model");
const router = express.Router();
const {
  // getProducts,
  // getProductDetail,
  // createProduct,
  // deleteProduct,
  // updayteProduct,
  createLinkSocialMedia,
  deleteSocialMedia,
  getLinkSocialMedia,
  updateSocialMedia,
  getSocialMediaDetail,
} = require("../controllers/linkSocialMedia.controller");

//get all products
router.get("/", getLinkSocialMedia);

//get product detail
router.get("/:id", getSocialMediaDetail);
// //create product
router.post("/", createLinkSocialMedia);
// //update product
router.put("/:id", updateSocialMedia);
// //delete product
router.delete("/:id", deleteSocialMedia);

module.exports = router;
