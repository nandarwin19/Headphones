const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect(
  "mongodb+srv://nwin:Nandarwin216078@cluster0.lxm27rd.mongodb.net/e-commerce"
);

// API Creation

app.get("/", (req, res) => {
  res.send("Welcome to E-commerce API");
});

// Image Storage Engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating upload Endpoint for images
// images is static endpoint
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Schema for Creating Products

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0]; // last product
    id = last_product.id + 1; // new id
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
  });
  console.log(product);
  await product.save(); // save to database
  console.log("Saved to Database");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// Creating API For deleting products
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Remove from Database");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// Creating API for getting all products
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products Fetched");
  res.send(products);
});

// Shema creating for User model
const Users = mongoose.model("Users", {
  name: {
    type: String, // type of data
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creating Endpoint for registering the user
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, errors: "Email Already Exists" });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  res.json({
    success: true,
    token,
  });
});

// creating endpoint for user login
app.post("/login", async (req, res) => {
  try {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
      const passCompare = req.body.password === user.password;
      if (passCompare) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const token = jwt.sign(data, "secret_ecom");
        res.json({ success: true, token });
      } else {
        res
          .status(400)
          .json({ success: false, errors: "Password is incorrect" });
      }
    } else {
      res.status(400).json({ success: false, errors: "Wrong email!" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res
      .status(500)
      .json({ success: false, errors: "An error occurred while logging in" });
  }
});

// creating endpoint for products for home page
app.get("/homeproducts", async (req, res) => {
  let products = await Product.find({});
  let homeProducts = products.slice(1).slice(-6);
  console.log("HomeProducts Fetched");
  res.send(homeProducts);
});

// creating middleware to fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Please Authenticate using a valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ errors: "Please authenticate using a valid token" });
    }
  }
};
// creating endpoint for adding products in cartdata
app.post("/addtocart", fetchUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id }); // find user
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  ); // update user
  res.send("Added");
});

// creating endpoint to remove the product from cartData
app.post("/removefromcart", fetchUser, async (req, res) => {
  console.log("removed", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id }); // find user
  if (userData.cartData[req.body.itemId] > 0) {
    userData.cartData[req.body.itemId] -= 1;

    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    ); // update user
    res.send("Removed");
  } else {
    res.send("Not Removed");
  }
});

// creating endpoint for getting cartData
app.get("/getcart", fetchUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id }); // find user
  res.send(userData.cartData);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port: " + port);
  } else {
    console.log("Error: " + error);
  }
});
