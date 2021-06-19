import { Response, Request } from "express"
import logger from "./logging"

export default ((err: Error, req: Request, res: Response, next: any) => {
  logger.error(err.message, {
    stack: err.stack, 
    path: req.path,
  })
  res.status(500).send('Something broke!')
})