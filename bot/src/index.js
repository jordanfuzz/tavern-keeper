const Discord = require('discord.js')
const bot = new Discord.Client()

const config = require('../config')

const commands = {
  roll: require('./commands/dice-roller'),
}

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', async message => {
  const messageText = message.content
  if (messageText.substring(0, 1) === '!') {
    const context = {
      guild: bot.guilds.cache.get(config.guildId),
      message,
      isDirectMessage: !message.guild,
    }

    const command = messageText.includes(' ')
      ? messageText.substring(1, messageText.indexOf(' '))
      : messageText.substring(1)
    const args = messageText.substring(messageText.indexOf(' ') + 1)

    if (commands[command.toLowerCase()]) {
      commands[command.toLowerCase()](args, context)
    }
  }
})

bot.login(config.botToken)
