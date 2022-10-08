const jwt = require('jsonwebtoken');
const constants = require('../constant/constant');
const { User } = require('../model/index');

const authMiddleware = async (req, res, next) => {
    let token = req.headers["token"];
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjUzMDMwODksImRhdGEiOnsiYXV0aEVtYWlsIjoieW9nZXNoQGdtYWlsLmNvbSIsImF1dGhQYXNzd29yZCI6IkFkbWluQDEyMyJ9LCJpYXQiOjE2NjUyMTY2ODl9.TTrVxdhyc67DVIoDoyvo83aM8EEn4gr1b9-6xApfIPw'
    // console.log(token)
    try {
        let verifiedToken = jwt.verify(token, constants.SECRETE_KEY);
        let data = verifiedToken.data;
        let userData = await User.findOne({
            where: {
                authEmail: data.authEmail,
            }
        });
        req.User = userData;
        next();
        return;
    }
    catch (error) {
        res.statusCode = 401;
        res.send("Unauthorised 2");
    }
}

module.exports = {
    authMiddleware
}