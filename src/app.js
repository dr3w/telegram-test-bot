'use strict'

const TeleBot = require('telebot')
const cfg = require('../config')

const bot = new TeleBot({
    token: cfg.token,
    webhook: {
        url: cfg.webhook,
        port: process.env.PORT || cfg.port
    }
})

bot.use(require('./modules/ask.js'))

bot.on('/start', msg => {
    const userId = msg.from.id

    return bot.sendMessage(userId, 'Hey!')
})
//
// bot.on('text', msg => {
//     const userId = msg.from.id
//
//     return bot.sendMessage(userId, 'You wrote: ' + )
// })
//
// bot.on('inlineQuery', msg => {
//     let userId = msg.from.id
//     let query = msg.query
//
//     return bot.sendMessage(userId, 'Query')
// })

module.exports = bot.connect.bind(bot)
