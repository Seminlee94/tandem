import React from 'react';
import QuestionCard from './container/QuestionCard'
import ScoreBoard from './container/ScoreBoard'
import AnsweredCard from './container/AnsweredCard'
import '../asset/css/Home.css'


function Home() {


    return(
        
        <div className="home">

            <ScoreBoard />
            <QuestionCard />
            <AnsweredCard />
        
        </div>

    )
}

export default Home