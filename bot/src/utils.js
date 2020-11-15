const formatReply = (replyMessage, isDirectMessage = false) => {
  return isDirectMessage
    ? replyMessage.charAt(0).toUpperCase() + replyMessage.substring(1)
    : replyMessage
}

module.exports = {
  formatReply,
}
