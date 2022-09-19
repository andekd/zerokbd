var path = require('path');
var fs = require('fs');
var async = require('async');
const { resourceLimits } = require('worker_threads');

exports.index = function (req, res) {
    async.parallel({
        kbdfiles: function(callback) {
            fs.readdir(
                path.resolve(process.env.PWD, 'kbdfiles'),
                (err, kbdf) => {
                    if (err) throw err;
        
                    for (let file of kbdf) {
                        console.log(file);
                    }
                    callback(null, kbdf);
                }
            )
        },
        testfiles: function(callback) {
            fs.readdir(
                path.resolve(process.env.PWD, 'testfiles'),
                (err, testf) => {
                    if (err) throw err;
        
                    for (let file of testf) {
                        console.log(file);
                    }
                    callback(null, testf);
                }
            )
        }
    }, function(err, results){
        if (err) { return next(err); }
        res.render('index', {title: 'Keyboard Emulator', kbdfiles: results.kbdfiles, testfiles: results.testfiles});
    });
};

exports.upload_get = function (req, res) {
    res.send('Upload get not implemented yet')
};

exports.upload_post = function (req, res) {
    res.send('Upload post not implemented yet')
};

exports.delete_get = function (req, res) {
    res.send('Delete file get not implemented yet')
};

exports.delete_post = function (req, res) {
    res.send('Delete post not implemented yet')
};

