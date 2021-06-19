import {ConnectionPool} from 'mssql'
import { Book } from "./models"

const pool = new ConnectionPool({
  user: 'dev',
  password: '123456',
  server: 'localhost', 
  database: 'BooksStore',
  options:{
    trustServerCertificate: true
  }
}) 

export const connect = async ()=> {
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