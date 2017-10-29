import { FETCH_LANGS } from '../actions/types';
import _ from 'lodash';

export default function fetchLangs(state = {}, action) {
	const { payload } = action;
	switch (action.type) {
		case FETCH_LANGS:
			let languages = [];
			payload.map(lang => {
				Object.keys(lang.data).map(shit => {
					languages.push(shit);
				});
			});
			console.log(languages);
			const destArray = _.uniq(languages);
			return { ...state, destArray };
		default:
			return state;
	}
}
