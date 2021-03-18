const formatReply = (replyMessage, isDirectMessage = false) => {
  return isDirectMessage
    ? replyMessage.charAt(0).toUpperCase() + replyMessage.substring(1)
    : replyMessage
}

const isUserAdmin = message => {
  return message.author.id === '165332337985323008'
}

module.exports = {
  formatReply,
  isUserAdmin,
}
