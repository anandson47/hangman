import "./word.css"
const Word=({word, guessed})=>{
    return(
        <>
        {word.split("").map((val)=>
            <span>{guessed.includes(val.toUpperCase())?val.toUpperCase():"_"}</span>
        )}
        </>
    )
}
export default Word;