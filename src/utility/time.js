module.exports.getCurrentWithFormat = function () {
    const dateObj = new Date().toISOString();
    return `${dateObj.slice(0,10)} ${dateObj.slice(11, 19)}`;
};
