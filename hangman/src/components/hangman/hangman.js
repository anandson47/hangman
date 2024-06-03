import "./hangman.css"
const Hangman=({chances})=>{
    return (
        <div className="hangmanDiv">
            { chances> 0 && <p>|</p>}
            { chances> 1 && <p>O</p> }
            { chances> 2 && <p>{chances>3 && <span>/</span>}|{chances>3 && <span>\</span>}</p>}
            { chances> 4 && <p>|</p>}
            { chances >5 && <p><span>/</span><span>\</span></p>}
        </div>
    )
}
export default Hangman