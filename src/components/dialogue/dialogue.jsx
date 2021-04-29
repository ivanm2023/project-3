import react from 'react'
import Msg from './messages.jsx'
import dlg from './dialogues.css'

function Dialogue(){
	return(
		<div className="dialogue">
		<div className="users">
			<ul className="user1">
				<li>Геннадий</li>
				<li>Роман Романов</li>
				<li>Иван</li>
			</ul>
		</div>
		<div className="messages">
			<Msg message="Всем ку"/>
		</div>





		</div>
)
}



export default Dialogue