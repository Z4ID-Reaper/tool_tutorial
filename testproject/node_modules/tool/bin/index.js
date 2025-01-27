#!/usr/bin/env node
const logger = require('../src/logger')('bin');
const arg = require('arg');
const chalk = require('chalk');
const getConfig = require('../src/commands/config-mgr');
const start = require('../src/commands/start');

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
  });
  logger.debug('Receiver args', args);

  if (args['--start']) {
    const config = getConfig();
    start(config);
  }
  if(args['--build']){
    console.log(chalk.red('buildin for you master!'));
  }
} catch (e) {
  logger.warning(chalk.yellow(e.message));
  console.log();
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')}\tStarts the app
  ${chalk.greenBright('--build')}\tBuilds the app`);
}