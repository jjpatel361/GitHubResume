import { FETCH_USER } from '../actions/types';

export default function fetchUser(state = {}, action) {
	const { payload } = action;
	switch (action.type) {
		case FETCH_USER:
			const { data } = payload;
			return { ...state, data };
		default:
			return state;
	}
}
