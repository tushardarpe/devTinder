const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://darpetushar_db:mXaQi13ygVTF2QcQ@namastenode.3zmudzd.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
