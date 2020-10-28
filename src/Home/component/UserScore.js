import React from 'react'
import '../../asset/css/User.css'

class UserScore extends React.Component {

    render() {
        
        return(
            <div className="user-info">
                {this.props.id===0 ? <img className="user-icon" src="https://www.flaticon.com/svg/static/icons/svg/3459/3459490.svg" alt="first-place"/> : null }
                {this.props.id===1 ? <img className="user-icon" src="https://www.flaticon.com/svg/static/icons/svg/3179/3179594.svg" alt="second-place"/> : null }
                {/* {this.props.id===1 ? <img className="user-icon" src="https://www.flaticon.com/svg/static/icons/svg/3179/3179797.svg"/> : null } */}
                {this.props.id===2 ? <img className="user-icon" src="https://www.flaticon.com/svg/static/icons/svg/1435/1435677.svg" alt="third-place"/> : null }
                {/* {this.props.id===2 ? <img className="user-icon" src="https://www.flaticon.com/svg/static/icons/svg/3179/3179317.svg"/> : null } */}
                <div className="user-name">
                    {this.props.user.name}
                </div>
                <div className="user-score">
                    {this.props.user.score}
                </div>
            </div>
            
        )
    }
}

export default UserScore