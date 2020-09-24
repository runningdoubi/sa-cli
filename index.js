#!/usr/bin/env node
/**
 * @file: index.js
 * @des: 入口文件
 * @author: zhangjiaqi03
 * @date: 2019-05-29 14:02:29
 * @last modified by:   zhangjiaqi03
 * @last modified time: 2019-05-29 14:02:29
**/

const program = require('commander');
const apim = require('./src/apim.js');


program
    .version(require('./package.json').version)
    .usage('[command] [options]')
    .option('-d, --description', 'start some service');

// apim命令
program
    .command('apim')
    .alias('a')
    .description('start apim client server')
    .option('-t,--token <token>', 'apim token')
    .option('-p,--port [port]', 'apim port, default 9090')
    .action(apim)

program.parse(process.argv);