import { combineReducers } from 'redux';
import numberOfRepos from './fetchAllRepos';
import fetchUser from './fetchUser';
import fetchLangs from './fetchLanguages';

const rootReducer = combineReducers({
	fetchRepos: numberOfRepos,
	user: fetchUser,
	langs: fetchLangs
});
export default rootReducer;
