const inquirer = require('inquirer')
const config = require('../../config')
const downloadRepo = require('./download')

const action = async (project, args) => {
  const templates = config.templates
  const templateNames = templates.map((item) => item.name)
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      choices: templateNames,
      message: '请选择需要下载的模板'
    }
  ])
  const templateUrl = templates.find(
    (item) => answer.template === item.name
  )?.url

  // 下载仓库代码
  downloadRepo(project, templateUrl)
}

module.exports = action
