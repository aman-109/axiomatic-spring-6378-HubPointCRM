const Product = require("../model/product.model");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const token_secret = process.env.TOKEN_KEY;

// Helper functions
const getProd = async (id) => {
  if (!id) {
    let prods = await Product.find();
    return prods;
  }
  let prod = await Product.findOne({ _id: id });
  return prod;
};

const searchProd = async (query) => {
  await Product.createIndexes({ name: "text" });
  let prod = await Product.find({ $text: { $search: query } });

  if (prod) {
    return prod;
  } else {
    return false;
  }
};

// Product Route Callbacks

// 1. Get All Product callback
const getAllProduct = async (req, res) => {
  let query = req.query.q;
  let filter = req.body.type;

  if (filter) {
    let prods = await Product.find({ type: filter });
    if (!prods) {
      return res.status(401).send({ message: "product not found" });
    } else {
      return res.status(200).send(prods);
    }
  } else if (query) {
    let prods = await searchProd(query);
    if (!prods) {
      return res.status(401).send({ message: "product not found" });
    } else {
      return res.status(200).send(prods);
    }
  } else {
    let prods = await getProd();
    if (prods) {
      return res.status(200).send(prods);
    } else {
      return res.status(401).send({ message: "something went wrong" });
    }
  }
};

// 2. Get Single Product
const getSingleProduct = async (req, res) => {
  let { id } = req.params;
  let prod = await getProd(id);
  if (prod) {
    return res.status(200).send(prod);
  } else {
    return res.status(401).send({ message: "something went wrong" });
  }
};
const addProd = async (req, res) => {
  let { id } = req.params;
  const token = req.cookies.token;
  let verification = jwt.verify(token, token_secret);
  try {
    let user = await User.findOne(
      { email: verification.email },
      { $push: { purchased_product: { product_id: id } } }
    );
    return res
      .status(200)
      .send({ status: true, message: "prodeuct added successfully" });
  } catch (e) {
    return res.status(401).send({ message: "something went wrong" });
  }
};

module.exports = { getAllProduct, getSingleProduct,addProd };
