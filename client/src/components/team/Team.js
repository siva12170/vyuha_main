import React from 'react'
import './Team.css'
import  videoBg from '../../assets/video.mp4'
const Team = () => {
    return (
        
        <div className='team'>
         <video src={videoBg} autoPlay loop muted/>
            <div className="container">
                <div className="content">
                    <h2><span>team</span> Page</h2>
                    this is team pageshould devolop more
                     <div>
                    <button>Learn More</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Team