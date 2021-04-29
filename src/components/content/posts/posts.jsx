import react from 'react'
import Post from './post.jsx'

function Posts(){
	return(
		<div className="posts">
	    	<input placeholder="Enter Text"/>
	    	<button>Post</button>
	   <Post message="New Post"/>
	    <Post message="New Post 2"/>
	     <Post message="что вы делаете в моём холодильнике?"/>
    	</div>
		)
}




export default Posts