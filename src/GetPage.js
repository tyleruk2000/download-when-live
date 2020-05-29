const wget = require('node-wget');

const log4js = require("log4js");
const logger = log4js.getLogger("GetPage");
logger.level = 'info';

function getPage(url){
    logger.info("Downloading page: " + url)
    wget ({
        url: url,
        dest: new Date().toISOString()
    })
}

module.exports = getPage;