import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <div className="app">
        <div className="header">
          <Header/>
        </div>
        <div className='content'>
          
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
