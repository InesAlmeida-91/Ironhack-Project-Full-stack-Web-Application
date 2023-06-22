const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = app => {
  app.set('trust proxy', 1);

  app.use(
    session({
      secret: 'Super Socialnetwork',
      resave: true,
      saveUninitialized: true,
      store: MongoStore.create({
        mongoUrl:  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ironhack-project-fullstack-webapp",
        // ttl: 10*60,
        // autoRemove: 'interval',
        // autoRemoveInterval: 10 
      }), // define a sessions collection in MongoDB
      cookie: {
        // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        // secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 900000 // 15 min
      },
      
    })
  );
};


    