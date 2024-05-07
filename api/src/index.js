const express = require('express')
const app = express()
// const { v4: uuidv4 } = require('uuid')
// const AWS = require('aws-sdk')
const cookieParser = require('cookie-parser')

const config = require('../config')
const npcRouter = require('./npcs/npc-routes')
const channelRouter = require('./channels/channel-routes')
const userRouter = require('./users/user-routes')

app.use(express.json())
app.use(cookieParser())
app.use('/api', npcRouter)
app.use('/api', channelRouter)
app.use('/api', userRouter)

// app.post('/api/images', function (request, response) {
//   AWS.config.update(config.awsConfig)
//   const s3 = new AWS.S3()
//   const s3Params = {
//     Bucket: 'tavern-keeper',
//     Key: uuidv4(),
//     ContentType: request.get('Content-type'),
//     ContentLength: request.get('Content-length'),
//     Body: request,
//     ACL: 'public-read',
//   }
//   s3.upload(
//     s3Params,
//     { patSize: 5 * 1024 * 1024, queueSize: 1 },
//     (err, data) => {
//       response.status(200).send(data.Location)
//       if (err) console.log(err)
//     }
//   )
// })

// app.get('/api/create-user', (request, response) => {
//   bcrypt
//     .hash('password here', 10)
//     .then(hash => {
//       console.log(hash)
//     })
//   response.send('Hello from the API')
// })

app.listen(config.port, () => console.log(`Listening on port ${config.port}`))

process.on('SIGINT', () => {
  process.exit()
})
