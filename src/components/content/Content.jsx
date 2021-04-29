import react from 'react'
import gena from '../../img/big_gorin.jpg'

import Posts from './posts/posts.jsx'
import './content.css'


function Content(){
  return(
    <div className="profile">
    <div className="photo_des">
    	<img src={gena}/>
    	<p>Genadii Gorin</p>
    </div>
    <Posts/>
    
    </div>
  )
}

export default Content