import React, { useState } from 'react';
import questionCard from '../../tandem.json';
import CardComponent from '../component/CardComponent';
import '../../asset/css/Home.css';


function QuestionCard() {

    const [displayIndex, setDisplayIndex] = useState(0)

    const next = (event) => {
        setDisplayIndex(displayIndex + 1)
    }

    const questionCards = () => {
        return questionCard.map(card => <CardComponent
            key={card.id} 
            question={card.question} 
            correct={card.correct} 
            incorrect={card.incorrect}
            next={next}
            />
        )
    }

    let allQuestion = questionCards()
    let shuffleQuestion = shuffleArray(allQuestion)

    return (
        <div className="home-question">
            {shuffleQuestion.slice(
                displayIndex,
                displayIndex + 1
             )}
            {/* <div className="home-question-card">
                {shuffleQuestion[0]}   
            </div> */}
            {/* <div className="home-question-shelf"> */}
                {/* <Shelf question={questionCards()} /> */}
            {/* </div> */}
        </div>
    )
}

function shuffleArray(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        
    }
    return array
}


export default QuestionCard