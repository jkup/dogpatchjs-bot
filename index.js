'use strict'

// NPM
const Twit   = require('twit')

// Local Config
const config = require('./local.json')

// Twit Config
const T      = new Twit(config)
const stream = T.stream('user')

stream.on('direct_message', function(directMsg) {
  const message    = directMsg.direct_message.text
  const messageId  = directMsg.direct_message.id_str
  const screenName = directMsg.direct_message.sender.screen_name

	console.log(message, screenName, messageId)
})
