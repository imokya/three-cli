#! /usr/bin/env node

const { program } = require('commander')
const help = require('../lib/core/help')
const commander = require('../lib/core/commander')

help(program)
commander(program)

program.parse(process.argv)
