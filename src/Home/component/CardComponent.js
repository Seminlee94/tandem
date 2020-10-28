import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import MoreButton from "./MoreButton";
import '../../asset/css/Card.css'

function CardComponent(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isFlippedBack, setIsFlippedBack] = useState(false);

    const handleClick = (item) => {
        setIsFlipped(!isFlipped)
        setIsFlippedBack(false)
        if (item === props.correct) {
            setIsCorrect(true)
        }
    }

    const handleClickBack = () => {
        // console.log("this hit")
        setIsFlippedBack(true)
        setIsFlipped(!isFlipped)
        setIsCorrect(false)
    }


    let incorrect = props.incorrect.map(option => option)
    let options = [...incorrect, props.correct]
    let shuffleOptions = shuffleArray(options)


    return (
        <>
            <ReactCardFlip 
                isFlipped={isFlipped} 
                flipDirection="horizontal"
            >

            <div className="card">
                <h4>{props.question}</h4>
                <ul className="card-ul">
                    {shuffleOptions.map((item,index) => {
                        return (
                            
                            <li key={index} onClick={() => handleClick(item)}>
                                {item}
                            </li>   
                        )
                    })}
                </ul>
            </div>

            {/* <div className="card-answered" style={isFlippedBack ? {display:"none"} : {display:"block"}}> */}
            <div className="card-answered">
                <div className="card" style= {isFlippedBack ? {display:"none"} : {display:"block"}} >
                    <div className="card-top">{isCorrect ? <h3 style={{color:"green"}}>Correct!</h3> : <h3 style={{color:"red"}}>Wrong!</h3> }</div>
                    <div className="card-answer">{props.correct}</div>
                    <div className="card-explanation">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="question-shelf-button" onClick={handleClickBack}>

                        <MoreButton card={props} moreItems={props.next} changeQuestionArray={props.changeQuestionArray}>
                            <svg
                                viewBox="0 0 16 16"
                                className="bi bi-arrow-right-circle-fill"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                            fillRule="evenodd"
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"
                            />
                            </svg>
                        </MoreButton>

                    </div>
                </div>

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