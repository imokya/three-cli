const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const downloadRepo = function (project, templateUrl) {
  const spinner = ora().start()
  spinner.text = '正在拉取模板代码...'
  download(`direct:${templateUrl}`, project, { clone: true }, (err) => {
    if (!err) {
      spinner.succeed('模板拉取成功\r\n')
      console.log(chalk.blue('运行以下命令: '))
      console.log(chalk.blue('cd ' + project))
      console.log(chalk.blue('npm i'))
      console.log(chalk.blue('npm run dev'))
    } else {
      spinner.fail('模板拉取失败')
      console.log(chalk.red(err))
    }
  })
}

module.exports = downloadRepo
