// Imports
import {HttpApplication} from 'microscope-web';
import HomeController from './controllers/HomeController';
import {commons} from './middlewares/commons';

class Application extends HttpApplication {
	
	get middlewares(){
		return [commons];
	}

	get controllers(){
		return [HomeController];
	}
}

export default Application;