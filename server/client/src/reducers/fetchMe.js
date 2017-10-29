import { FETCH_ME } from '../actions/types';

export default function fetchMe(state = null, action) {
	switch (action.type) {
		case FETCH_ME:
			if (action.payload.data !== '') {
				return action.payload;
			} else return false;
		default:
			return state;
	}
}
