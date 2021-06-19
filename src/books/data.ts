import config from "config"
import { ConnectionPool } from 'mssql'
import logging from "../logging"
import { Book } from "./models"



const pool = new ConnectionPool(config.get<any>("Books.db"))

export const connect = async () => {
  try {
    await pool.connect()
    logging.info("connected to db")
  } catch (error) {
    logging.error("failed to connect to database", error);
  }
}

export const getById = async (id: number): Promise<Book> => {
  const result = await pool.query<Book>`
    select id,title,releaseDate 
    from [Books] 
    where id = ${id}
  `
  return result.recordset[0];
}