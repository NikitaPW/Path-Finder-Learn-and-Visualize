import { React, Component } from "react";
import { Link } from 'react-router-dom'


export default class About extends Component {
    render() {
        return (
            <div className='about-container'>
                <div className="about-title">About the Project</div>

                    <div className='about-description'>
                        <p>
                            The project is devoted for those who would like to see how the path finding algorithms are working. There is a great <Link to='/visualization'> visualization tool</Link> created
                            to see the way the algorithm is looking for the shortest path. You can choose 1 ot top 5 best known algorithms, create mazes and see how the algorithm is working from start till its finish.
                            You can move start and finish and create you own walls as well.
                        </p>
                        <p>
                            It's written in <a href="https://reactjs.org/">React</a>. The souce code for this project you can find in here <Link>Github</Link>. 
                        </p>
                        <p className='completed'>
                            Completed by <Link>Nikita Zakharov</Link>
                        </p>
                    </div>
            </div>
        );
    }
}