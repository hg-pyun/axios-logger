let config = {
    requestType: 0,
    responseType: 0,
    errorType: 0
};


function getConfig() {
    return config;
}

function setConfig(newConfig) {
    config = newConfig;
}

module.exports.getConfig = getConfig;
module.exports.setConfig = setConfig;