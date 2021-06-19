import config from "config"
import { ConnectionPool } from 'mssql'
import { Book } from "./models"

const pool = new ConnectionPool(config.get<any>("Books.db"))

export const connect = async () => {
  await pool.connect()
}

export const getById = async (id: number): Promise<Book> => {
  const result = await pool.query<Book>`
    select id,title,releaseDate 
    from [Books] 
    where id = ${id}
  `
  return result.recordset[0];
}