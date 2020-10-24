const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => res.send('Hello my good friends!'))

app.listen(port, () => console.log(`Listening on port ${port}`))

process.on('SIGINT', () => {
  process.exit()
})
