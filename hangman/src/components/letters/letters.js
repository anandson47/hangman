import "./letters.css";

const Letters=({letter , input, visible=true , onLetterClick})=>{

    return(
    <div onClick={onLetterClick} className={`letter ${input?'input':""}`} style={{visibility:`${visible?"visible":"hidden"}`}}>
        {letter}
    </div>
    )
}

export default Letters; 