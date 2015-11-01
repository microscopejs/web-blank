// Import
import {Controller} from 'microscope-web';
import {controllerFilter, actionFilter} from '../filters/commonFilters';

class HomeController extends Controller {

	// add some controllers filter
	get filters(){
		return [controllerFilter];
	}

	// configure controller routing with callback array
	get routes(){
		return {
			'get /': [actionFilter, 'index'],
			'get /home/about': 'about'
		}
	}

	// index action
	// GET /
	index(request, response){
		response.render('index');
	}

	// about action
	// GET /home/about
	about(request, response){
		response.render('about');
	}
}

export default HomeController;