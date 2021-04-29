import react from 'react'
import gena1 from '../../../img/small_gorin.jpg'



function Post(props){
	return(
		<div className="post">
			<img src={gena1}/>
			<span>Genadii Gorin</span>
			<p>{props.message}</p>
		</div>
	)
}

export default Post
