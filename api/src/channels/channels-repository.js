const camelize = require('camelize')
const pgPool = require('../pg-pool')

const getAll = () => {
  return pgPool.query('select * from channels;').then(res => camelize(res.rows))
}

const removeAllWebhooks = () => {
  return pgPool
    .query(`update channels set has_webhook = 'false';`)
    .then(res => camelize(res.rows))
}

const addWebhookToChannel = channelId => {
  return pgPool
    .query(`update channels set has_webhook = 'true' where id = $1;`, [
      channelId,
    ])
    .then(res => camelize(res.rows))
}

module.exports = {
  getAll,
  removeAllWebhooks,
  addWebhookToChannel,
}
