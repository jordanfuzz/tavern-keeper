const express = require('express')
const router = express.Router()
const channelsRepository = require('./channels-repository')
const axios = require('axios')
const { discordWebhookId, discordWebhookToken } = require('../../config')

router.get('/channels', async (req, res) => {
  const channels = await channelsRepository.getAll()
  res.status(200).send(channels)
})

router.patch('/channels/webhook', async (req, res) => {
  await channelsRepository.removeAllWebhooks()
  const updatedWebhook = await axios.patch(
    `https://discord.com/api/webhooks/${discordWebhookId}/${discordWebhookToken}`,
    { channel_id: req.body.channelId }
  )
  const updatedChannel = await channelsRepository.addWebhookToChannel(
    updatedWebhook.channel_id
  )
  res.status(200).send(updatedChannel)
})

module.exports = router
