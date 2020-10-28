import React from 'react';
import '../../asset/css/Home.css';
import * as biIcons from "react-icons/bi"


class AnsweredCard extends React.Component {

    state = {
        clickArrow: false
    }

    arrowClicked = () => {
        this.setState({ clickArrow: !this.state.clickArrow })
    }

    questionCards = () => {
        return this.props.answeredArray.map(card => console.log(card))
    }

    render() {

        return (
    
            <>
                <div className={this.state.clickArrow ? "hide-answered-card" : "answered-card"} >
                    <div className="answered-arrow" onClick={() => this.arrowClicked()}>
                        {this.state.clickArrow ? <biIcons.BiArrowToLeft /> : <biIcons.BiArrowToRight /> }
                    </div>
                    <div className="answered-card-top">answered cards</div>
                    <div className="answered-card-bottom">
                        {this.props.answeredArray.length > 0 
                            ? 
                                this.questionCards() 
                            : 
                                <div className="answered-card-empty">
                                    You have not answered any questions yet!
                                </div>
                        }
                    </div>
                </div >
            </>
        )
    }

}

export default AnsweredCard