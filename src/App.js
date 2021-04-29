import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Nav/Nav.jsx'
import Content from './components/content/Content.jsx'
import Dialogue from './components/dialogues/dialogue.jsx'
import {Route,BrowserRouter} from 'react-router-dom'



function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Header/>
      <Navbar/>
    <div>
    <Route path="/content" component={Content} />
    <Route path="/dialogue" component={Dialogue} />
    </div>
    </BrowserRouter>
    </div>
  );
}




export default App;
