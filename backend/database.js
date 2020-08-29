const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection
  .once("open", () => console.log("db Connected"))
  .on("error", (error) => console.log(error));
