const express = require("express");
// const Product = require("./models/product.model");
const router = express.Router();
const {
  getProblem,
  getProblemDetail,
  createProblem,
  updateProblem,
  deleteProblem,
} = require("../controllers/problems.controller");

//get all products
router.get("/", getProblem);

//get product detail
router.get("/:id", getProblemDetail);
// //create product
router.post("/", createProblem);
// //update product
router.put("/:id", updateProblem);
// //delete product
router.delete("/:id", deleteProblem);

module.exports = router;
