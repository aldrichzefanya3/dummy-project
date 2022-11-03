const {clientAuth}  = require('../utils/client-authorization');


exports.doctor = (req, res, next) => {
    return clientAuth(req, res, next, "DOCTOR")
};