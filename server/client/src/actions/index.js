import { FETCH_REPOS, FETCH_USER } from './types';

const BASE_GITHUB_URL = 'https://api.github.com/';
const headers = {
	headers: { Authorization: 'token 174978a4fe7ace02cf33a8357e24bf1ab3ec2ca2' }
};

const axios = require('axios');

export const setUsername = name => async dispatch => {
	Promise.all([getAllRepos(name), getUserObject(name)]).then(results => {
		dispatch({
			type: FETCH_REPOS,
			payload: results[0]
		});
		dispatch({
			type: FETCH_USER,
			payload: results[1]
		});
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
