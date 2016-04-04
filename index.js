'use strict'

// NPM
const Twit    = require('twit')
const weekday = require('weekday')

// Local Config
const config = require('./local.json')

// Twit Config
const T      = new Twit(config)
const stream = T.stream('user')

stream.on('direct_message', function(directMsg) {
  // Get current day
  const Today = new Date().getDay()

  // Only run if it is a Tuesday
  if (Today !== weekday('Tuesday')) {
    console.log('Please check back on Tuesday') 
  } else {
    const message    = directMsg.direct_message.text
    const messageId  = directMsg.direct_message.id_str
    const screenName = directMsg.direct_message.sender.screen_name

    console.log(message, screenName, messageId)
  }
})
