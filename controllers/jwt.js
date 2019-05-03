const expressJwt = require('express-jwt');
const service = require('../controllers/user');

module.exports = jwt;

function jwt() {
    const secret = '_secret';
    console.log('jwt_1');//debug
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/cdlist',
            '/login',
            '/registration',
            '/name'

        ]
    });
}

async function isRevoked(req, payload, done) {
    console.log('jwt_2');//debug
    const user = await service.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};