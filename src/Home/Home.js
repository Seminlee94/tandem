import React from 'react';
import QuestionCard from './container/QuestionCard'
import ScoreBoard from './container/ScoreBoard'
import AnsweredCard from './container/AnsweredCard'
import '../asset/css/Home.css'



class Home extends React.Component {

    state = {
        unansweredIdArray: [],
        answeredIdArray: [],
        unansweredArray: [],
        answeredArray: []
    }

    componentDidMount(){
        let userId = localStorage.getItem("userId")
        fetch("http://localhost:3000/api/v1/user_decks")
            .then(resp => resp.json())
            .then(data => data.filter(user => parseInt(user.user_id) === parseInt(userId)).map(obj => this.setState(() => ({ unansweredIdArray:obj.unanswered, answeredIdArray: obj.answered }), () => this.questionArrayHandle())))
    }

    questionArrayHandle = () => {
        if (this.state.unansweredIdArray.length > 0) {
            this.state.unansweredIdArray.map(obj => 
                fetch("http://localhost:3000/api/v1/questions")
                    .then(resp => resp.json())
                    .then(data => this.setState({ unansweredArray: data })))
        }
        if (this.state.answeredIdArray.length > 0) {
            this.state.answeredIdArray.map(obj => 
                fetch("http://localhost:3000/api/v1/questions")
                    .then(resp => resp.json())
                    .then(data => this.setState({ answeredArray: data})))
        }
    }

    changeQuestionArray = (id) => {
        console.log("this hit:", id)
    }
    
    render(){        
        
            return(
                
                <div className="home">
        
                    <ScoreBoard />
                    <QuestionCard unansweredArray={this.state.unansweredArray} changeQuestionArray={this.changeQuestionArray} />
                    <AnsweredCard answeredArray={this.state.answeredArray} />
                
                </div>
        
            )
    }
}

export default Home