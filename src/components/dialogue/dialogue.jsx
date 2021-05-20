import react from 'react'
import Msg from './messages.jsx'
import dlg from './dialogues.css'
import {NavLink} from 'react-router-dom'
import Dlg_i from './dialogue_item.jsx'

let dialogue_names=[{name:"Геннадий",id:0},
					{name:"Роман Романов",id:1},
					{name:"Иван",id:2}				
				]

let messages_=[{message:"Всем ку",id:0},
			   {message:"Ку",id:1},
			   {message:"Привет",id:2}
]


function Dialogue(){
	return(
		<div className="dialogue">
			<div className="users">
				<div className="user1">
						{dialogue_names.map(function(e){return <Dlg_i name={e.name} id={e.id}/>})}
						{/*<Dlg_i name={dialogue_names[0].name} id={dialogue_names[0].id}/>
						<Dlg_i name={dialogue_names[1].name} id={dialogue_names[1].id}/>
						<Dlg_i name={dialogue_names[2].name} id={dialogue_names[2].id}/>*/}
				</div>
			</div>
				<div className="messages">
					{messages_.map(function(e){return <Dlg_i message={e.message} id={e.id}/>})}
					<input/>
					<button>Отправить</button>
				</div>





		</div>
)
}



export default Dialogue