import { FETCH_ME } from '../actions/types';

export default function fetchMe(state = null, action) {
	switch (action.type) {
		case FETCH_ME:
			return action.payload || false;
		default:
			return state;
	}
}
