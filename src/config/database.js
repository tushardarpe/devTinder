const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://darpetushar_db:6DkYez3yvW2sIWsM@namastenode.3zmudzd.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
