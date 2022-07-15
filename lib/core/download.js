const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const downloadRepo = function (project, templateUrl) {
  const spinner = ora().start()
  spinner.text = '正在拉取模板代码...\r\n'
  download(`direct:${templateUrl}`, project, { clone: true }, (err) => {
    if (!err) {
      success(spinner, project)
    } else {
      success(spinner, project)
    }
  })
}

function success(spinner, project) {
  spinner.succeed('模板拉取成功\r\n')
  console.log(chalk.blueBright('运行以下命令: \r\n'))
  console.log(chalk.blueBright('cd ' + project))
  console.log(chalk.blueBright('npm i'))
  console.log(chalk.blueBright('npm run dev'))
}

function fail(spinner, project) {
  spinner.fail('模板拉取失败\r\n')
  console.log(chalk.red(err))
}

module.exports = downloadRepo
