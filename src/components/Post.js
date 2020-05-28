import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class Post  extends Component{
 
	render() { 
		const  post = this.props.post ? (
			<div className="post">

			<div className="center">{this.props.post.title}</div>
			
			<p>{this.props.post.body}</p>
			</div>
		) : (
			<div className="center">Loading post ..</div>
		)


		return(
		<div className="container">
			{post}
		</div>
	)
	}
}

// export default Post


const mapStateToProps = (state, ownProps) =>{

	let id = ownProps.match.params.post_id;

	return{
		post:state.posts.find(post => id === id)
	}

}

export default connect(mapStateToProps)(Post) 