import _ from 'lodash';
import {
	FETCH_BLOG,
	FETCH_BLOGS
} from '../actions/types'


export default (state={}, action) =>{
	switch (action.type){
		case FETCH_BLOGS:
			return {...state, ..._.mapKeys(action.payload, 'id')}
		case FETCH_BLOG:
		 return {...state, [action.payload.id]: action.payload};
		default:
		return state;
	}
}