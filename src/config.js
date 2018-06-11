let config = {
    mode: 0
};


function get() {
    return config;
}

function set(newConfig) {
    config = newConfig;
}

module.exports.get = get;
module.exports.set = set;