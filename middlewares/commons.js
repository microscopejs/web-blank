var path = require('path');
var serveStatic = require('serve-static')
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

export function commons (app) {
	app.set('views', path.join(__dirname, '../views'));
	app.set('view engine', 'ejs');
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(serveStatic(path.join(__dirname,'../public')));
};