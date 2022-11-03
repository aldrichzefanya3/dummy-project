const { Response } = require('yesdok-node-utils'); 


exports.clientAuth = (req, res, next, type) =>{
    const headers = (req.headers['client-authorization']);
    const auth = JSON.parse(Buffer.from(headers, 'base64').toString('ascii'));

    if(auth === undefined){
        return Response.send(401, null, 'Authorization Header Absent!', res);
    }
    
    if(auth.Type !== type){
        return Response.send(401, null, 'Your access denied!', res);
    }

    next();
}
