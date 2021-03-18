'use strict'

const dotenv = require('dotenv')
dotenv.config()

const e = process.env

const isDevelopment = e.NODE_ENV === 'development'

module.exports = {
  pg: {
    host: e.POSTGRES_HOST,
    user: e.POSTGRES_USER,
    database: e.POSTGRES_DB,
    password: e.POSTGRES_PASSWORD,
  },
  botToken: e.DISCORD_BOT_TOKEN,
  isDevelopment,
  guildId: isDevelopment ? '777407426159968276' : '504517457805836290',
}
