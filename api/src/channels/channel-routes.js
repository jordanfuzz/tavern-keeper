const express = require('express')
const router = express.Router()
const channelsRepository = require('./channels-repository')
const axios = require('axios')
const {
  discordWebhookId,
  discordWebhookToken,
  botToken,
} = require('../../config')
const { organizeChannelsByCategory } = require('../utils')

router.get('/channels', async (req, res) => {
  const channels = await channelsRepository.getAll()
  res.status(200).send(organizeChannelsByCategory(channels))
})

router.patch('/channels/webhook', async (req, res) => {
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

  await channelsRepository.addWebhookToChannel(updatedWebhook.data.channel_id)
  const updatedChannels = await channelsRepository.getAll()
  res.status(200).send(organizeChannelsByCategory(updatedChannels))
})

router.post('/channels/send-message', async (req, res) => {
  await axios
    .post(
      `https://discord.com/api/webhooks/${discordWebhookId}/${discordWebhookToken}`,
      {
        content: req.body.message,
        username: req.body.name,
        avatar_url: req.body.avatarUrl,
      }
    )
    .catch(err => {
      console.log(err)
      res.status(500).send('Error sending webhook message!')
    })
  res.status(200).send('Message sent!')
})

module.exports = router
