var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('connect-flash');
var session = require('express-session');

var loginRoutes= require('./routes/login');
var registerRoutes= require('./routes/register');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRoutes= require('./routes/Home');
var aboutRoutes=require('./routes/about');
var playRoutes=require('./routes/play');
var articleRoutes=require('./routes/article');
var commentRoutes=require('./routes/comment');
var moodListRoutes=require('./routes/moodList');
var gameRoutes=require('./routes/game');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:"users",
  cookie:{maxAge:6000}
}));
app.use(flash());
app.use(function (req,resp,next) {
  resp.locals.err = req.flash("err");
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRoutes);
app.use('/register',registerRoutes);
app.use('/Home',homeRoutes);
app.use('/about',aboutRoutes);
app.use('/play',playRoutes);
app.use('/article',articleRoutes);
app.use('/comment',commentRoutes);
app.use('/moodList',moodListRoutes);
app.use('/game',gameRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
