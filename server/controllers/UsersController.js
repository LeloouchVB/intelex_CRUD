var User = require('../models/User');
var {validationResult} = require('express-validator/check');

exports.index = function (req, res, next) {
  User.find(function (err, users) {
        if (err) return next(err);
        res.json(users);
    });
};

exports.show = function (req, res, next) {
  User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.json(user);
    })
};



exports.store = function (req, res, next) {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.mapped()})
    }

    User.create(req.body, function (err, user) {
        if (err) return next(err);
        res.json(user);
    });
};


exports.update = function (req, res, next) {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.mapped()})
    }

    User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
        if (err) return next(err);
        res.json(user);
    });
};

exports.destroy = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
        if (err) return next(err);
        res.json(user);
    });
};