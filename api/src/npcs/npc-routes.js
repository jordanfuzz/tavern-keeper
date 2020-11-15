const express = require('express')
const router = express.Router()
const npcsRepository = require('./npcs-repository')

router.get('/npcs', async (req, res) => {
  console.log('Got here!')
  const npcs = await npcsRepository.getAll()
  res.send(npcs)
})

module.exports = router
