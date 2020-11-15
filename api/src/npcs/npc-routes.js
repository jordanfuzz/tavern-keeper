const express = require('express')
const router = express.Router()
const npcsRepository = require('./npcs-repository')

router.get('/npcs', async (req, res) => {
  console.log('Got here!')
  const npcs = await npcsRepository.getAll()
  res.status(200).send(npcs)
})

router.post('/npc', async (req, res) => {
  const savedNpc = await npcsRepository.save(req.body)
  response
    .status(200)
    .send(savedNpc)
    .catch(err => console.log(err))
})

module.exports = router
