import react from 'react'
import Post from './post.jsx'

let posts=[{text:"New Post", id:0},
		   {text:"New Post2", id:1},
		   {text:"что вы делаете в мойм холодильнике?", id:2}
]


function Posts(){
	return(
		<div className="posts">
	    	<input placeholder="Enter Text"/>
	    	<button>Post</button>
	    	{posts.map(function(e){return <Post text={e.text} id={e.id}/>})}
	   {/*<Post message="New Post"/>
	    <Post message="New Post 2"/>
	     <Post message="что вы делаете в моём холодильнике?"/>*/}
    	</div>
		)
}




export default Posts