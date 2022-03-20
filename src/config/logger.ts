
import { createLogger, format, transports } from 'winston'

const { combine } = format

export const logger = createLogger({
    level: 'info',
    format: combine(
      format.json(),
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }), 
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`+(info.splat!==undefined?`${info.splat}`:" "))
 
    ),
    defaultMeta: { service: 'fumigation' },
    transports: [
      new transports.File({ 
          filename: `src/logs.log`, 
          level: 'info'
        })
     ],
  })
  
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
      format: format.simple(),
    }))
  }
 