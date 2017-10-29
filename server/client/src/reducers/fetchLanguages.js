import { FETCH_LANGS } from '../actions/types';

export default function fetchLangs(state = {}, action) {
	const { payload } = action;
	switch (action.type) {
		case FETCH_LANGS:
			const { data } = payload;
			return { ...state, data };
		default:
			return state;
	}
}
