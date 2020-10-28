import React from "react";
import { Link, withRouter } from 'react-router-dom';
import "../asset/css/Navbar.css";
// import * as faIcons from "react-icons/fa"
import 'rsuite/lib/styles/index.less'

class Navbar extends React.Component {

    logout = () => {
        console.log("this hit")
        localStorage.clear()
        localStorage.removeItem("token")
        localStorage.removeItem("data")
        localStorage.removeItem("user")
        localStorage.removeItem("username")
        this.props.history.push('/login')
    };

    render() {

        return (
          <nav className="navbarItems">
      
            <Link className="navbarLogo" to="/">Tandem Quiz</Link>
      
            <div className="nav-menu">
      
              <li className="navbar-box" onClick={() => this.logout()}>Sign out</li>
            </div>
      
          </nav>
        );
    }
  

}

export default withRouter(Navbar);