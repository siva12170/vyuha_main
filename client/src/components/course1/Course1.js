import React from 'react'
import './Course1.css'
import '../../images/image2.png'

const Course1 = () => {

    return (
        <div class="container1">
        <div class="box" >
            <div class="content">
                <div class="icon"><ion-icon name="brush"></ion-icon></div>
                <div class="text">
                    <h3>Designing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="box" >
            <div class="content">
                <div class="icon"><ion-icon name="code-slash"></ion-icon></div>
                <div class="text">
                    <h3>Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="box" >
            <div class="content">
                <div class="icon"><ion-icon name="search"></ion-icon></div>
                <div class="text">
                    <h3>SEO</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>

    )

}

export default Course1