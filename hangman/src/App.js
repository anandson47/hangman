import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Hangman from './components/hangman/hangman';
import Guessed from './components/guessed/guessed';

function App() {
  return (
    <>
      <div className="app">
        <div className="header">
          <Header/>
        </div>
        <div className='content'>
          <div className="hangmanSection">
            <Hangman/>
            <Guessed letters={["a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d"]}/>
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
