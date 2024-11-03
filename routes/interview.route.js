const express = require("express");
// const Product = require("./models/product.model");
const router = express.Router();
const {
  // getProducts,
  // getProductDetail,
  // createProduct,
  // deleteProduct,
  // updayteProduct,
  createInterview,
  getInterview,
  getInterviewDetail,
  updateInterview,
  deleteInterview,
} = require("../controllers/Interview.controller");

//get all products
router.get("/", getInterview);

//get product detail
router.get("/:id", getInterviewDetail);
// //create product
router.post("/", createInterview);
// //update product
router.put("/:id", updateInterview);
// //delete product
router.delete("/:id", deleteInterview);

module.exports = router;
