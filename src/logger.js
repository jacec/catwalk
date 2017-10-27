
var logger = require('winston');
var dateFormat = require('dateformat');

logger.setLevels({error: 4,
                  warn: 3,
                  info: 2,
                  verbose: 1,
                  debug: 0});
logger.addColors({error: 'red',
                  warn: 'yellow',
                  info: 'cyan',
                  verbose: 'magenta',
                  debug: 'green'});

logger.remove(logger.transports.Console);

logger.add(logger.transports.Console, { timestamp: function() {return dateFormat(new Date(), "yyyy-mm-dd h:MM:ss:l"); },
                                        level: 'debug',
                                        colorize:true,
                                        stderrLevels:['error'] });

logger.level = "error"; //default

module.exports = logger;
