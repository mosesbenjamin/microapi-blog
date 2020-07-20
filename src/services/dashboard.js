import http from './http';


export const List = async () =>{
		try{
   			return await http.get('/v1');
   		} catch (err){
   			throw err;
  		}
}

export const Blog = async (id) =>{
		try{
   			return await http.get(`/v1/${id}`);
   		} catch (err){
   			throw err;
  		}
}



