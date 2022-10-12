import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Container, Row, Col} from 'react-bootstrap';


function App() {
  return (
    <div>
      <Header className='header'/>
       <div className="App-header">
        <Form/>
      </div>
      <Footer/> 
    </div>
  );
}

export default App;
