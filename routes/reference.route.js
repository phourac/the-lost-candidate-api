const express = require("express");
// const Product = require("./models/product.model");
const router = express.Router();
const {
  // getProducts,
  // getProductDetail,
  // createProduct,
  // deleteProduct,
  // updayteProduct,
  createLinkReference,
  getLinkRefernces,
  getReferenceDetail,
  updateReference,
  deleteReference,
} = require("../controllers/linkReference.controller");

//get all products
router.get("/", getLinkRefernces);

//get product detail
router.get("/:id", getReferenceDetail);
// //create product
router.post("/", createLinkReference);
// //update product
router.put("/:id", updateReference);
// //delete product
router.delete("/:id", deleteReference);

module.exports = router;
