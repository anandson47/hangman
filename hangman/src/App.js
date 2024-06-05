import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Hangman from './components/hangman/hangman';
import Guessed from './components/guessed/guessed';
import InputBox from './components/inputbox/inputbox';
import Word from './components/word/word';
import { useEffect, useRef, useState } from 'react';
import { WORDS } from './data/words';

function App() {

  const [guessedLetters , setGuessedLetters]= useState([])
  const [errorMessage, setErrorMessage] = useState("");
  const [disable , setDisable] = useState(false)
  const [success , setSuccess]= useState(false)
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
    else if(eqSet(new Set([...guessedLetters,event.target.innerText.toUpperCase()]) , new Set(currentWord.toUpperCase().split("")))){
      setSuccess(true)
    }
    console.log(eqSet(new Set([...guessedLetters,event.target.innerText.toUpperCase()]) , new Set(currentWord.toUpperCase().split(""))))
    setGuessedLetters([...guessedLetters,event.target.innerText.toUpperCase()])  
    
  }

  const eqSet = (xs, ys) =>
    {
      console.log(xs , ys)
      return (
    xs.size === ys.size &&
    [...xs].every((x) => ys.has(x))) ;
    }


  const onResetClick=()=>{
    setErrorMessage("")
    setDisable(false)
    setGuessedLetters([])
    setChances(0)
    setSuccess(false)
    setCurrentWord(WORDS[Math.floor(Math.random()*WORDS.length)])
  }

  useEffect(()=>{
    if(chances>5){
      setErrorMessage("Game Over!!!")
      setDisable(true)
    }
  },[chances])

  useEffect(()=>{
    if(success){
      setDisable(true)
    }
  },[success])


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
            <InputBox onLetterClick={!disable?onInputClick:()=>""} guessed={guessedLetters}/>
          </div>
          <div className='errorMessage'>{errorMessage}</div>
          {success &&  <div className='successMessage'>Wuhuu you succeeded</div>}
          {(errorMessage==="Game Over!!!" || success) && <button onClick={onResetClick} className='reset-button'>Reset</button>}
          
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
