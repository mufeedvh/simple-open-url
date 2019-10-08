#!/usr/bin/env node

const open = require('./open')

const argv = process.argv.slice(2)

;(async () => {
    // TODO: return the correct error code
    const code = await open(argv)
    process.exit(code)
})()
