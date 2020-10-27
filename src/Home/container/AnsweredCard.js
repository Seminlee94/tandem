import React, { useState } from 'react';
import '../../asset/css/Home.css';
import * as biIcons from "react-icons/bi"


function AnsweredCard() {
    const [clickArrow, setClickArrow] = useState(false)

    const arrowClicked = () => {
        setClickArrow(!clickArrow)
    }

    return (

        <>
            <div className={clickArrow ? "hide-answered-card" : "answered-card"} >
                <div className="answered-arrow" onClick={arrowClicked}>
                    {clickArrow ? <biIcons.BiArrowToLeft /> : <biIcons.BiArrowToRight /> }
                </div>
                <div className="answered-card-top">answered cards</div>
            </div >
        </>
    )
}

export default AnsweredCard