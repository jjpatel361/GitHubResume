import { combineReducers } from 'redux';
import numberOfRepos from './fetchAllRepos';
import fetchUser from './fetchUser';
import fetchLangs from './fetchLanguages';
import fetchMe from './fetchMe';

const rootReducer = combineReducers({
	fetchRepos: numberOfRepos,
	user: fetchUser,
	langs: fetchLangs,
	auth: fetchMe
});
export default rootReducer;
