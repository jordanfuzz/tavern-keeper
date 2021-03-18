const { formatReply, isUserAdmin } = require('../utils')
const pgPool = require('../pg-pool')

module.exports = async (command, { message, guild, isDirectMessage }) => {
  if (!isUserAdmin(message) || isDirectMessage) return

  pgPool.query('select id from channels;').then(res => {
    const existingChannelIds = res.rows.map(x => x.id)
    const channels = guild.channels.cache.filter(
      x => x.type !== 'voice' && !existingChannelIds.includes(x.id)
    )

    if (channels.size === 0)
      message.reply(formatReply(`everything's up to date!`, isDirectMessage))
    else {
      const insertStatement = `
        insert into channels(id, category_id, name, channel_type, has_webhook)
        values($1, $2, $3, $4, $5)
        returning *;
      `
      console.log(channels)
      Promise.all(
        channels.map(channel => {
          pgPool.query(insertStatement, [
            channel.id,
            channel.parentID,
            channel.name,
            channel.type === 'category' ? channel.type : 'text',
            false,
          ])
        })
      )
        .then(insertedRows => {
          message.reply(
            formatReply(
              `synced ${insertedRows.length} unregistered channel(s)!`,
              isDirectMessage
            )
          )
        })
        .catch(err => console.log(err))
    }
  })
}
