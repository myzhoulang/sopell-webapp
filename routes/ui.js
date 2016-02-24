/* GET users listing. */
exports.dialog = function (req, res) {
    res.render('dialog', {
        title: '对话框'
    });
};


exports.segment = function (req, res) {
    res.render('segment', {
        title: '分段选择'
    });
};

exports.lists = function (req, res) {
    res.render('lists', {
        title: 'Lists'
    });
};

exports.panel = function (req, res) {
    res.render('panel', {
        title: 'Panel'
    });
};

//排版
exports.typography = function (req, res) {
    res.render('typography', {
        title: 'Typography'
    });
}