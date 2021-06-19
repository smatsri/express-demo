import { argv } from "yargs";
import express from "express";

import booksRouter from "./books/router"
import { connect } from "./books/data";

const app = express();

app.use('/api/books', booksRouter)

const PORT = process.env.PORT || argv["port"] || 1234

const run = async () => {
  await connect();
  app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
  });
}
run();