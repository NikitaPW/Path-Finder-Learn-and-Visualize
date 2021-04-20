import React, {Component} from 'react';
import './styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'


export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            showLinks: false,
        };
    }

    showLinks(){
        this.setState(prevState => ({showLinks: !prevState.showLinks}));
    }

    render(){
        const {showLinks} = this.state;
        return(
            <div className="header-container">
                    <nav id="nav">
                        <div className="nav-center fixed-nav">
                        <div className="nav-header ">
                            <h2>PathFinder</h2>
                            <button className="nav-toggle" onClick ={() => this.showLinks()}>
                                <FontAwesomeIcon icon ={["fas", "bars"]} color="#90CCF4"/>
                            </button>
                        </div>
                        <div className={`links-container ${showLinks ? "show-links" : ""}`}>
                        <ul className="links">
                            <li>
                                <Link to="/" className="scroll-link">Home</Link>
                            </li>
                            <li>
                                <Link to ="/about" className="scroll-link">About</Link>
                            </li>
                            <li>
                                <Link to="/algorithms" className="scroll-link">algorithms</Link>
                            </li>
                            <li>
                                <Link to="/visualization" className="scroll-link">Visualizer</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                    </nav>
                </div>
        )
    }
}
