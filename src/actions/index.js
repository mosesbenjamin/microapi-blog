import {
	FETCH_BLOG,
	FETCH_BLOGS
} from './types';

import http from '../services/http'




export const fetchBlogs = ()=> async dispatch =>{
	const response = await http.get('/v1');

	dispatch({type: FETCH_BLOGS, payload: response.data});
};


export const fetchBlog = (id) => async dispatch=>{
	const response = await http.get(`v1/${id}`);

	dispatch({type: FETCH_BLOG, payload: response.data});
}
