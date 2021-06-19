import { argv } from "yargs";
import { Application } from "express"
import * as booksDb from "./books/data";
import logger from "./logging";

const PORT = process.env.PORT || argv["port"] || 1234

export default async (app: Application) => {
  try {
    await booksDb.connect();
    logger.info("connected to db")
  } catch (error) {
    logger.error("failed to connect to db", error)
    return;
  }
  app.listen(PORT, () => {
    logger.info('listening on port ' + PORT)
  });
}