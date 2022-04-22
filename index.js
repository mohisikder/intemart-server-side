const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zz9qt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("intemart_db");
    const productsCollection = database.collection("products");
    const bookingCollection = database.collection("user_booking");
    const usersCollection = database.collection("users");
  } catch (error) {}
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("intemart server is running");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
