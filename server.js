const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

// Register the eq helper with handlebars
hbs.handlebars.registerHelper('eq', function(a, b) {
    return a === b;
});

const Handlebars = require('handlebars');

Handlebars.registerHelper('formatDate', function(dateValue) {
    const date = new Date(dateValue);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
});


const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('An Error has Occured!');
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening at ${PORT}`));
});
