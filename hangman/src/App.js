import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Hangman from './components/hangman/hangman';
import Guessed from './components/guessed/guessed';
import InputBox from './components/inputbox/inputbox';
import Word from './components/word/word';
import { useRef, useState } from 'react';
import { WORDS } from './data/words';

function App() {

  const [guessedLetters , setGuessedLetters]= useState([])
  const [errorMessage, setErrorMessage] = useState("");
  const [chances, setChances]=useState(0)
  let wordRef=useRef()
  const [currentWord,setCurrentWord]=useState(WORDS[Math.floor(Math.random()*WORDS.length)]);
  const onInputClick=(event)=>{
    if(guessedLetters.includes(event.target.innerText.toUpperCase())){
      setErrorMessage("Letter already guessed")    
    }
    else{
      setErrorMessage("")
    }
    if(!currentWord.includes(event.target.innerText.toLowerCase())){
      setChances(chances+1)
    }
    setGuessedLetters([...guessedLetters,event.target.innerText.toUpperCase()])  
  }


  return (
    <>
      <div className="app">
        <div className="header">
          <Header/>
        </div>
        <div className='content'>
          <div className="hangmanSection">
            <Hangman chances={chances}/>
            <Guessed letters={guessedLetters}/>
          </div>
          <div className='word'>
            <Word word={currentWord} guessed={guessedLetters}/>
          </div>
          <div className='inputbox'>
            <InputBox onLetterClick={onInputClick} guessed={guessedLetters}/>
          </div>
          <div className='errorMessage'>{errorMessage}</div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
