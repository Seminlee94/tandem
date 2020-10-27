import React from 'react';
import questionCard from '../../tandem.json';
import CardComponent from '../component/CardComponent';
import '../../asset/css/Home.css';
import Shelf from '../component/Shelf';


function QuestionCard() {

    const questionCards = () => {
        return questionCard.map(card => <CardComponent 
            question={card.question} 
            correct={card.correct} 
            incorrect={card.incorrect} 
            />
        )
    }

    let allQuestion = questionCards()
    let shuffleQuestion = shuffleArray(allQuestion)

    return (
        <div className="home-question">
            {/* <div className="home-question-card">
                {shuffleQuestion[0]}   
            </div> */}
            <div className="home-question-shelf">
                <Shelf question={questionCards()} />
            </div>
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