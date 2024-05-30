import Letters from "../letters/letters";
import "./guessed.css"
const Guessed=({letters=[]})=>{
    console.log(letters)
    return(
        
        <div className="guessed-letters">
            <div className="guessed-container"> 
            {
                letters.map((letter)=>
                    <Letters key={letter} letter={letter}/>
                )
            }
            </div>
        </div>
        
    )
}

export default Guessed;