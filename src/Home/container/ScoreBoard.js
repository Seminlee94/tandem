import React from 'react';
import '../../asset/css/Home.css';
import UserScore from '../component/UserScore'

class ScoreBoard extends React.Component {

    state = {
        scoreArray:[]
    }

    componentDidMount(){
        fetch("http://localhost:3000/api/v1/users")
            .then(resp => resp.json())
            .then(data => this.setState(() =>({scoreArray: data})))
    }

    userScores = () => {
        let filteredScore=this.state.scoreArray.filter(user => user.score!=null)
        let sortScore = filteredScore.sort((a, b) => b.score - a.score)
        return sortScore.map((user, index) => <UserScore id={index} key={user.id} user={user} />)
    }

    render() {

        // console.log(filteredScore)

        return (
            <div className="home-score">
                <div className="home-score-top">Score</div>
                <div className="home-score-user">{this.userScores()}</div>
            </div >
        )
    }

}

export default ScoreBoard