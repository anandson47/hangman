import Letters from "../letters/letters"
import "./inputbox.css"
const InputBox=({onLetterClick , guessed})=>{
    let alphabets=["a","b","c","d","e","f"
    ,"g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z"]

    return(
        <div class="inputBox">
            {
                alphabets.map((letter)=>
                    <Letters letter={letter} onLetterClick={onLetterClick} input={true} visible={!guessed.includes(letter.toUpperCase())}/>
            )
            }
        </div>
    )
}


export default InputBox;