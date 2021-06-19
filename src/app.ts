import express from "express";

import booksRouter from "./books/router"
import globalErrorHandler from "./globalErrorHandler";
import run from "./run";

const app = express();

app.use('/api/books', booksRouter)
app.use('/throw', (r,s) => {
  throw new Error("test error")
})

app.use(globalErrorHandler)

run(app);