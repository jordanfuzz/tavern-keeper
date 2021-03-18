const camelize = require('camelize')
const pgPool = require('../pg-pool')

const getAll = () => {
  return pgPool
    .query(
      `select c1.id, c2.name as category_name, c1.name, c1.has_webhook from channels c1
    join channels c2 on c1.category_id = c2.id and c2.channel_type = 'category';`
    )
    .then(res => camelize(res.rows))
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
