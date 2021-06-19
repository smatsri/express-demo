import { RequestHandler } from "express";
import * as data from "./data"

export const getById: RequestHandler = async (req,res) => {
  const id = +req.params.id;
  if (!id) {
    res.status(400).send("id missing")
    return;
  }
  const book = await data.getById(id)
  if (!book) {
    res.status(404).send("not found")
    return
  }

  res.send(book)
}