const app = require("./app");
const mongoose = require("mongoose");
const PORT = 4000;
const http = require("http");

const MONGO_URL =
  "mongodb+srv://articles:LZTs2fi9jtzDmWBy@cluster0.j79qjx2.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("mongoDB ready connect");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});

const mongoConnection = async () => {
  await mongoose.connect(MONGO_URL);
};
const mongoDisconnect = async () => {
  await mongoose.disconnect();
};
const server = http.createServer(app);

const startServer = async () => {
  await mongoConnection();
  server.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
};

startServer();
