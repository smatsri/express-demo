import { createLogger, transports, format } from "winston";
import os from "os"
const { combine, timestamp, label, json } = format;

const hostname = os.hostname()

const common =  format((info) => {
  info["host"] = hostname
  return info
})

const logger = createLogger({
  format: combine(
    format.metadata(),
    timestamp(),
    common(),
    json(),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: '.\\logs\\log.json' })
  ]
});

export default logger;