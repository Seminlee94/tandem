import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import '../../asset/css/Card.css'

function CardComponent(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }


    let incorrect = props.incorrect.map(option => option)
    let options = [...incorrect, props.correct]
    let shuffleOptions = shuffleArray(options)

    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="card">
                <h4>{props.question}</h4>
                <ol className="card-ol">
                    {shuffleOptions.map((item,index) => {
                        return (
                            
                            <li key={index} onClick={handleClick}>
                                {item}
                            </li>   
                        )
                    })}
                </ol>
            </div>

            <div className="card">
                <div className="card-answer" onClick={handleClick}>{props.correct}</div>
                <div className="card-explanation">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            </ReactCardFlip>
        </>
    )
}

function shuffleArray(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        
    }
    return array
}

export default CardComponent