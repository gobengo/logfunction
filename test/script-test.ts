import log, { LogLevel } from '../src'
const level = process.env.LOGFUNCTION_LEVEL as LogLevel
log(level, 'hello from', __filename)
