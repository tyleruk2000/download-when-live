const axios = require('axios').default;

const log4js = require("log4js");
const logger = log4js.getLogger("IsLive");
logger.level = 'info';

async function isLive(url){

    try{
        const response = await axios.get(url);
        logger.info("Sucsess!")
    }catch(err){
        logger.warn(err.response.status + " - " + err.response.statusText)
        return false
    }
    return true
}

module.exports = isLive