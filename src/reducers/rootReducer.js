const initState ={
	posts: [
		{id:1, title:'asdasdasda', body:'asdasd'},
		{id:2, title:'asdasd221', body:'asdas'},
		{id:3, title:'asdq2w', body:'qweqwe'},
	]
}


const  rootReducer = (state = initState, action) =>{

	if (action.type === 'DELETE_POST'){
		let newPosts = state.posts.filter(post =>{
			return action.id !== post.id
		});

		return {
			...state,
			posts:newPosts
		}
	}


	return state;
}


export default rootReducer