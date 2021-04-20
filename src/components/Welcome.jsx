import React, {Component} from 'react';
import './styles.css'
import { Link } from 'react-router-dom'


export default class Welcome extends Component {
    render() {
        return (
            <div>
                <div className="banner-container">
                    <div className="banner">
                        <div className="container">
                            <h1>Path Finding Algorithms</h1>
                            <p>Get to know Path Finding Algorithms!</p>
                            <p>
                                Learn and visualize</p>
                            <Link to ="/algorithms" className="btn btn-white">Explore algorithms</Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}