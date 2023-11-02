import React from 'react'
import './Portfolio.css'
import  videoBg from '../../assets/video.mp4'
const Portfolio = () => {
    return (
        
        <div className='portfolio'>
         <video src={videoBg} autoPlay loop muted/>
            <div className="container">
                <div className="content">
                    <h2><span>portfolio</span> Page</h2>
                    this is team pageshould devolop more
                     <div>
                    <button>Learn More</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio