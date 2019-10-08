#!/usr/bin/env node
const open = require('./open')

const urls = process.argv.slice(2)
urls.map(url => {
    open(url)
})
