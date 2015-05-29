var path = require('path');

var createPattern = function(file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var initHappen = function(files) {
    files.unshift(createPattern(require.resolve('happen')));
};

initHappen.$inject = ['config.files'];

module.exports = {
    'framework:happen': ['factory', initHappen]
};
