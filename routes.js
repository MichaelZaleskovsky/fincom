let findNm = require('./findNm');
module.exports = function(app, db) {
    app.post('/test', (req, res) => {
        let result = findNm(req.body);
        var str = result.join('<br>');
        res.send(str);
    });
};