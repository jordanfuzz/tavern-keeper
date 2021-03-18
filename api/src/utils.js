const organizeChannelsByCategory = channels => {
  let categorizedChannelsDictionary = {}

  channels.forEach(channel => {
    if (categorizedChannelsDictionary[channel.categoryName])
      categorizedChannelsDictionary[channel.categoryName].push(channel)
    else categorizedChannelsDictionary[channel.categoryName] = [channel]
  })

  return categorizedChannelsDictionary
}

module.exports = {
  organizeChannelsByCategory,
}
