import React from 'react'
import './Ourcontent.css'
import  videoBg from '../../assets/video.mp4'
const Ourcontent = () => {
    return (
        
        <div className='ourcontent'>
         <video src={videoBg} autoPlay loop muted/>
            <div className="container">
                <div className="content">
                    <h2><span>Our content</span> Page</h2>
                    this is team pageshould devolop more
                     <div>
                    <button>Learn More</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Ourcontent