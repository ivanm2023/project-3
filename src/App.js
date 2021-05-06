import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Nav/Nav.jsx'
import Content from './components/content/Content.jsx'
import Dialogue from './components/dialogue/dialogue.jsx'
import {Route,BrowserRouter} from 'react-router-dom'


                    
function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Header/>
      <Navbar/>
    <div>
    <Route exact path="/content" component={Content} />
    <Route exact path="/dialogue" component={Dialogue} />
    <Route exact path="/users" component={Content} />
    </div>
    </BrowserRouter>
    </div>
  );
}




export default App;
