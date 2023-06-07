const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
const UserModel=require("./database")
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'Random String';

const passport=require('passport')

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {

    console.log(jwt_payload)

    const user=await UserModel.findOne({id: jwt_payload._id});

        // if (err) {
        //     return done(err, false);
        // }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
}));
