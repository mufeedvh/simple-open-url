var spawn = require('child_process').spawn

function _getCommand() {
    const commands = {
        'aix': 'defaultbrowser',
        'android': null,
        'darwin': 'open',
        'freebsd': 'open',
        'linux': 'xdg-open',
        'openbsd': 'open',
        'sunos': 'xdg-open', // maybe should detect the os version for Solaris 11 and later
        'win32': 'start'
    }
    let platform = process.platform
    let command = commands[platform]
    if (!command) {
        throw new Error(`Your platform ${platform} is not supported, please use other package instead`)
    }
    return command || null
}

// ignore error
async function open(url) {
    return new Promise((resolve, reject) => {
        let command = _getCommand()
        let child = spawn(command, [url])
        child.on('error', (err) => {
            if (err.code === 'ENOENT') {
                console.error('请输入网址')
            } else {
                console.error(err)
            }
        })
        child.on('exit', (code) => {
            resolve(code)
        })
    })
}

module.exports = open
