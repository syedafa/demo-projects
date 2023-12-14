const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log(
      `database is connected successfully to : ${connect.connection.host}`.cyan
        .underline
    );
  } catch (error) {
    console.log(`an error has occured , message : ${error.message}`.red.bold);
    process.exit();
  }
};
module.exports = connectDB;
