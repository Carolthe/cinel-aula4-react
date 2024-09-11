import { useState } from "react"

export default function Like (){

    const [like, setLike] = useState (0)

    function handleClick (){
        setLike(like + 1)
    }
    let backgroundColor = like == 0 ? "blue" : like === 1 ? "green" : like == 2 ?  "red" : "gray"
    
    return(
        <div>
            <button className="buttonlike" onClick={handleClick} style={{ backgroundColor }}> Likes {like}</button>
        </div>
    )
}