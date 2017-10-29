import { FETCH_REPOS, FETCH_USER, FETCH_LANGS, FETCH_ME } from './types';

const BASE_GITHUB_URL = 'https://api.github.com/';

const axios = require('axios');

export const setUsername = name => async dispatch => {
	let masterPromises = [];
	masterPromises.push(getAllRepos(name));
	masterPromises.push(getUserObject(name));
	Promise.all(masterPromises).then(results => {
		dispatch({
			type: FETCH_REPOS,
			payload: results[0]
		});
		dispatch({
			type: FETCH_USER,
			payload: results[1]
		});
	});

	// Promise.all(getLangs(name)).then(results => {
	// 	console.log(results);
	// 	results.map(result => {
	// 		dispatch({
	// 			type: FETCH_LANGS,
	// 			payload: result
	// 		});
	// 	});
	// });
	getLangs(name).then(langs => {
		Promise.all(langs).then(results => {
			dispatch({
				type: FETCH_LANGS,
				payload: results
			});
		});
	});
};

export const fetchMe = () => async dispatch => {
	const req = await axios.get('/api/me');
	dispatch({
		type: FETCH_ME,
		payload: req
	});
};

const getAllRepos = name => {
	return axios.get(`${BASE_GITHUB_URL}users/${name}/repos?sort=created`);
};

const getUserObject = name => {
	return axios.get(`${BASE_GITHUB_URL}users/${name}`);
};

const getLangs = async name => {
	let promiseArray = [];
	const req = await axios.get(`${BASE_GITHUB_URL}users/${name}/repos`);
	req.data.map(result => {
		if (!result.fork) {
			promiseArray.push(axios.get(result.languages_url));
		}
	});
	return promiseArray;
};
