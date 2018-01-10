const glob = require('glob');
const path = require('path');
const fs = require('fs');
const moment = require('moment');
const debug = require('debug')('file');
const config = require('./config');

const now = moment().subtract(config.BEFORE, 'days');
debug('now',now);

glob(config.ROOT, (err, files) => {

    if (err) {
        throw err;
    }

    files.forEach(item => {
        const fileName = path.basename(item);
        const matchs = fileName.match(config.PATTERN);
        debug('fileName:', fileName);
        if (matchs) {
            const matchDate = moment(matchs[1], config.MOMENT_FORMAT);
            const isSameOrBefore = matchDate.isSameOrBefore(now);
            debug('matchDate:', matchDate);
            debug('isSameOrBefore:', isSameOrBefore);

            // 找到之前的
            if (isSameOrBefore) {
                fs.unlinkSync(item);
                debug('deleted file', item);
            }
        }
        debug('=======');
    });
});