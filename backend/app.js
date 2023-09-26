import express from 'express'
import config from './config/index.js'
import logger from "./loaders/logger.js"
import loaders from "./loaders/index.js";

const app = express()
const port = 80


// router
import router from './router/api.js'
app.use("/api", router);

app.get('/', (req, res) => {
  res.send('Hello World!')  
})

loaders(app)



const server = app.listen(port, () => {
    logger.info(`
      🛡️  Server listening on port: ${config.server_port} 🛡️
    `)
    console.log(`Example app listening on port ${port}`)
  }).on('error', (err) => {
    logger.error(err)
    process.exit(1)
  })

export default { server }