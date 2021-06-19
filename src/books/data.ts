import { ConnectionPool } from 'mssql'
import { Book } from "./models"

import config from "config"

const dbConfig = config.get<any>("Books.db")

console.log(dbConfig);


const pool = new ConnectionPool(dbConfig)

export const connect = async () => {
  try {
    await pool.connect()

  } catch (error) {
    console.log("failed to connect", error);
  }
}

export const getById = async (id: number): Promise<Book> => {
  const result = await pool.query<Book>`select id,title,releaseDate from [Books] where id = ${id}`
  return result.recordset[0];
}