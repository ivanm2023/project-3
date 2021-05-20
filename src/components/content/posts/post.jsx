import react from 'react'
import Profile_info from './profile/profile_info.jsx'



function Post(props){
	return(
		<div className="post">
			<Profile_info/>
			<p>{props.text}</p>
		</div>
	)
}

export default Post
