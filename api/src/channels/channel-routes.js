const express = require('express')
const router = express.Router()
const channelsRepository = require('./channels-repository')
const axios = require('axios')
const { discordWebhookId, botToken } = require('../../config')
const { organizeChannelsByCategory } = require('../utils')

router.get('/channels', async (req, res) => {
  const channels = await channelsRepository.getAll()
  res.status(200).send(organizeChannelsByCategory(channels))
})

router.patch('/channels/webhook', async (req, res) => {
  console.log('Got here!')
  console.log('BODY', req.body)
  await channelsRepository.removeAllWebhooks()
  const updatedWebhook = await axios
    .patch(
      `https://discord.com/api/webhooks/${discordWebhookId}`,
      {
        channel_id: req.body.channelId,
      },
      { headers: { Authorization: `Bot ${botToken}` } }
    )
    .catch(err => console.log(err))

  console.log(updatedWebhook.data)
  await channelsRepository.addWebhookToChannel(updatedWebhook.data.channel_id)
  const updatedChannels = await channelsRepository.getAll()
  res.status(200).send(organizeChannelsByCategory(updatedChannels))
})

module.exports = router
