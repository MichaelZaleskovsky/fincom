var result = [];
function findNM(input) {
    for (fild in input) {
        if (fild === 'Nm') {
            result.push(input[fild]);
        } else {
            if (typeof(input[fild]) === 'object') {
                findNM(input[fild]);
            }
        }
    }
}

module.exports = function (input) {
    result = [];
    findNM(input);
    return result;
};