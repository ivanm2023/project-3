import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Nav/Nav.jsx'
import Content from './components/content/Content.jsx'



function App() {
  return (
    <div className="app">

      <Header/>
      <Navbar/>
      <Content/>

    </div>
  );
}




export default App;
