import react from 'react'
import {NavLink} from 'react-router-dom'


const Dialogue_Item=function (props){
	return(
		<div className="user">
			<NavLink to={`/dialogue/${props.id}`}>{props.name}</NavLink>
		</div>
	)
}



export default Dialogue_Item