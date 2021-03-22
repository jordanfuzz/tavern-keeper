'use strict'

const dotenv = require('dotenv')
dotenv.config()

const e = process.env

const isDevelopment = e.NODE_ENV === 'development'

module.exports = {
  awsConfig: {
    accessKeyId: e.AWS_ACCESS_KEY_ID,
    secretAccessKey: e.AWS_SECRET_ACCESS_KEY,
    region: e.AWS_REGION,
  },
  pg: {
    host: e.POSTGRES_HOST,
    user: e.POSTGRES_USER,
    database: e.POSTGRES_DB,
    password: e.POSTGRES_PASSWORD,
  },
  discordWebhookId: e.DISCORD_WEBHOOK_ID,
  discordWebhookToken: e.DISCORD_WEBHOOK_TOKEN,
  botToken: e.DISCORD_BOT_TOKEN,
  jwtSecret: e.JWT_SECRET,
  cookieOptions: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
  isDevelopment,
  port: 3002,
}
