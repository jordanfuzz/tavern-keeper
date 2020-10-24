const Discord = require('discord.js')
const bot = new Discord.Client()
const pgPool = require('./pg-pool')

const config = require('../config')

const getSomethingFromDatabase = async () => {
  return await pgPool.query('select * from npcs;').then(res => res.rows[0])
}

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', async message => {
  const messageText = message.content
  console.log(messageText)
  const foo = await getSomethingFromDatabase()
  console.log(foo)
})

bot.login(config.botToken)
