const ora = require('ora')
const installTask = require('../tasks/install')

async function install({ configsPath, targetPath, options, version }) {
  const spinner = ora({
    text: 'applying configuration... 🚀',
    spinner: 'line',
    prefixText: 'sharec:',
    interval: 50,
  }).start()

  try {
    await installTask({ configsPath, targetPath, options })

    spinner.succeed('configuration applyed, have a nice time! 🌈')

    console.info(
      [
        'sharec: for install injected dependencies run:',
        'npm i',
        'Have a nice time!',
      ].join('\n'),
    )
  } catch (err) {
    const { message } = err

    if (message.includes('already installed')) {
      spinner.succeed('configs already injected! ✨')
    } else if (message.includes('ENOENT')) {
      spinner.fail('configs directory was not found! ⛔️')
    } else {
      spinner.fail('unhandeled error! 💥')
      console.erorr(err)
    }
  }
}

module.exports = install
