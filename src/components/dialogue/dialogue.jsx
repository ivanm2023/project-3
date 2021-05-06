import react from 'react'
import Msg from './messages.jsx'
import dlg from './dialogues.css'
import {NavLink} from 'react-router-dom'
import Dlg_i from './dialogue_item.jsx'

function Dialogue(){
	return(
		<div className="dialogue">
			<div className="users">
				<div className="user1">
						<Dlg_i name="Геннадий" id={"1"}/>
						<Dlg_i name="Роман Романов" id={"2"}/>
						<Dlg_i name="Иван" id={"3"}/>
				</div>
			</div>
				<div className="messages">
					<Msg message="Всем ку"/>
					<input/>
					<button>Отправить</button>
				</div>





		</div>
)
}



export default Dialogue