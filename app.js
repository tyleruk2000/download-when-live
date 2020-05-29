var sleep = require('sleep');

const log4js = require("log4js");
const logger = log4js.getLogger("app");
logger.level = 'info';

const IsLive = require('./src/IsLive')
const GetPage = require('./src/GetPage')

const URL = process.argv[2]

logger.info("Checking page: " + URL)

main();

async function main(){
    let live = false;
    while (!live){
        live = await IsLive(URL);
        if (!live){
            logger.info("Page not live, sleeping for 60 seconds")
            sleep.sleep(60)    
        }
    }

    for(let i = 0; i < 10; i++){
        GetPage(URL)
        logger.info("Sleeping for 60 seconds, " + (10-i) + " more downloads")
        sleep.sleep(60)
    }
}