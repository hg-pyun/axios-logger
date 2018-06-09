function errorLogger(err) {
    console.log(error);
    return Promise.reject(error);
}


module.exports = errorLogger;