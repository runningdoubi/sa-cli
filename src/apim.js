/**
 * @file: start.js
 * @des: 开启apim服务
 * @author: zhangjiaqi03
 * @date: 2019-05-29 14:15:27
 * @last modified by:   zhangjiaqi03
 * @last modified time: 2019-05-29 14:15:27
 */

const apimTool = require('apim-tools');
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');

const DEFAULT_PORT = '9090';
const MOCK_PATH = path.resolve(__dirname, '../mock');
function startApim(options) {
    if (!options.token) {
        return;
    }
    if (fs.existsSync(MOCK_PATH)) {
        rimraf.sync(MOCK_PATH);
    }
    var port = options.port || DEFAULT_PORT;
    const apimMw = apimTool.koa({
        // 设置存储的 mock 相关数据存储的根目录
        root: MOCK_PATH,
        // 项目 schema token 具体到 apim 平台查看
        schemaToken: options.token,
        // 是否启动时候立刻自动同步
        startAutoSync: true,
        port
    });
    
    app.use(apimMw);
    
    app.listen(DEFAULT_PORT, () => {
        console.log('apim start on 9090')
    });
}
module.exports = startApim