import react from 'react'
import gena from '../../img/big_gorin.jpg'
import gena1 from '../../img/small_gorin.jpg'
import './content.css'

function Content(){
  return(
    <div className="profile">
    <div className="photo_des">
    	<img src={gena}/>
    	<p>Genadii Gorin</p>
    </div>
    <div className="posts">
    <input placeholder="Enter Text"/>
    <button>Post</button>
    <div className="post">
    <img src={gena1}/>
    <span>Genadii Gorin</span>
    <p>Some Text</p>
    </div>
    </div>
    
    </div>
  )
}

export default Content