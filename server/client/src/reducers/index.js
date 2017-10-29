import { combineReducers } from 'redux';
import numberOfRepos from './fetchAllRepos';
import fetchUser from './fetchUser';

const rootReducer = combineReducers({
	fetchRepos: numberOfRepos,
	user: fetchUser
});
export default rootReducer;
