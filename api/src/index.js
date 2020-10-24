const express = require('express')
const app = express()
const port = 3002
// const AWS = require('aws-sdk')

app.get('/', (req, res) => res.send('Hello my good friends!'))
app.get('/api', (req, res) => res.send('Howdy, UI!'))

// app.post('/api/images', function (request, response) {
//   AWS.config.update(config.awsConfig)
//   const s3 = new AWS.S3()
//   const s3Params = {
//     Bucket: 'dungeon-archive',
//     Key: uuid(),
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
//     }
//   )
// })

app.listen(port, () => console.log(`Listening on port ${port}`))

process.on('SIGINT', () => {
  process.exit()
})
