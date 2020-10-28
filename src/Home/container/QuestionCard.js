import React from 'react';
import CardComponent from '../component/CardComponent';
import '../../asset/css/Home.css';


class QuestionCard extends React.Component {

    state = {
        displayIndex: 0
    }

    next = (event) => {
        this.setState({ displayIndex: this.state.displayIndex+1 }) 
    }

    questionCards = () => {
        return this.props.unansweredArray.map(card => <CardComponent
            key={card.id}
            id={card.id}
            question={card.question} 
            correct={card.correct} 
            incorrect={card.incorrect}
            next={this.next}
            changeQuestionArray={this.props.changeQuestionArray}
            />
        )
    }

    shuffleArray = (array) => {
    
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            
        }
        return array
    }


    render() {
        let allQuestion = this.questionCards()
        let shuffleQuestion = this.shuffleArray(allQuestion)

        return (
            <div className="home-question">
                {shuffleQuestion.slice(
                    this.state.displayIndex,
                    this.state.displayIndex + 1
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
}




export default QuestionCard