require("dotenv").config();
const app = require("./app");
require("./database");
function main(app) {
  app.listen(process.env.PORT, () =>
    console.log(`Server on port: ${process.env.PORT}`)
  );
}

main(app);
