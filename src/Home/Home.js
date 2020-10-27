import React from 'react';
import QuestionCard from './container/QuestionCard'
import ScoreBoard from './container/ScoreBoard'
import '../asset/css/Home.css'


function Home() {


    return(
        <div className="home">

            <ScoreBoard />
            <QuestionCard />
        
        </div>

    )
}

export default Home