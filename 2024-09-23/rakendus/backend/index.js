const express = require('express');
const cors = require("cors");
const catsRoutes = require("./routes/cats.routes");
const exampleRoutes = require("./routes/example.routes");

const app = express();
const port = 8080;

app.use(cors()); 
app.use(express.json());

app.use("/cats", catsRoutes);
app.use("/example", exampleRoutes); 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
