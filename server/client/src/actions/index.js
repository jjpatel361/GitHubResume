import { FETCH_REPOS, FETCH_USER, FETCH_LANGS, FETCH_ME } from './types';

const BASE_GITHUB_URL = 'https://api.github.com/';
const headers = {
	headers: { Authorization: 'token 024c7d019f0c49bd7098522a7df8fdbe431c1f03' }
};

const axios = require('axios');

export const setUsername = name => async dispatch => {
	Promise.all([
		getAllRepos(name),
		getUserObject(name),
		getLangs(name)
	]).then(results => {
		dispatch({
			type: FETCH_REPOS,
			payload: results[0]
		});
		dispatch({
			type: FETCH_USER,
			payload: results[1]
		});
		dispatch({
			type: FETCH_LANGS,
			payload: results[2]
		});
	});
};

export const fetchMe = async dispatch => {
	const req = await axios.get('/api/me');
	console.log(req);
	dispatch({
		type: FETCH_ME,
		payload: req
	});
};

const getAllRepos = name => {
	return axios.get(
		`${BASE_GITHUB_URL}users/${name}/repos?sort=created`,
		headers
	);
};

const getUserObject = name => {
	return axios.get(`${BASE_GITHUB_URL}users/${name}`, headers);
};

const getLangs = name => {
	return axios.get(`${BASE_GITHUB_URL}users/${name}/repos`).then(result => {
		return result.data.map(repo => {
			return axios.get(`${repo.languages_url}`);
		});
	});
};
