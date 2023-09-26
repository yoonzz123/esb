// index.js
import logger from './logger.js'
import expressLoader from './express.js'
export default (app)=>{
    logger.info('express Loader Success!!')
    expressLoader(app)
}