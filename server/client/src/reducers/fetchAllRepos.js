import { FETCH_REPOS } from '../actions/types';

export default function numberOfRepos(state = {}, action) {
	const { payload } = action;
	switch (action.type) {
		case FETCH_REPOS:
			const { data } = payload;
			return { ...state, data };
		default:
			return state;
	}
}
