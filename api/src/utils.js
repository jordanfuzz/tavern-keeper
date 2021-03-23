const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config')

const organizeChannelsByCategory = channels => {
  let categorizedChannelsDictionary = {}

  channels.forEach(channel => {
    if (categorizedChannelsDictionary[channel.categoryName])
      categorizedChannelsDictionary[channel.categoryName].push(channel)
    else categorizedChannelsDictionary[channel.categoryName] = [channel]
  })

  return categorizedChannelsDictionary
}

const generateJwt = userData => {
  const unsignedPayload = {
    userId: userData.id,
  }
  return jwt.sign(unsignedPayload, jwtSecret, { expiresIn: '7d' })
}

function getUserIdFromJwt(userJwt) {
  return jwt.verify(userJwt, jwtSecret).userId
}

module.exports = {
  generateJwt,
  organizeChannelsByCategory,
  getUserIdFromJwt,
}
