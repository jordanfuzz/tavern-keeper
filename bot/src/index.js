const Discord = require('discord.js')
const bot = new Discord.Client()

const config = require('../config')

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', message => {
  const messageText = message.content
  console.log(message.content)
})

bot.login(config.botToken)
