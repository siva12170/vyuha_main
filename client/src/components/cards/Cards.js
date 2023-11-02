  import React from 'react'
  import './Cards.css';
  import CardItem from './CardItem';
  import Imageo1 from '../../images/image1.jpeg';
  import Imageo2 from '../../images/image2.png';
  import Imageo3 from '../../images/img-3.jpg';
  import Imageo4 from '../../images/img-4.jpg';
  import Imageo5 from '../../images/img-5.jpg';
 const Cards = () => {
   return (
     <div className='cards'>
     <h1> card with photes and path!</h1>
     <div className='cards__container'>
       <div className='cards__wrapper'>
         <ul className='cards__items'>
           
           <CardItem
             src={Imageo1}
             text=' 
             -	Sr Consultant and Placement Incharge'      
             label='G Srinivas'
             path='/course1'
           />
             <CardItem
             src={Imageo2}
             text='
             -	Sr Consultant UNICEF'
             label=' Srilatha Sivalenka'
             path='/course2'
           />
         </ul>
         <ul className='cards__items'>
         <CardItem
             src={Imageo1}
             text=' 
             -	Sr Consultant and Placement Incharge'      
             label='G Srinivas'
             path='/course1'
           />
             <CardItem
             src={Imageo2}
             text='
             -	Sr Consultant UNICEF'
             label=' Srilatha Sivalenka'
             path='/course2'
           />
            <CardItem
             src={Imageo1}
             text=' 
             -	Sr Consultant and Placement Incharge'      
             label='G Srinivas'
             path='/course1'
           />
            
         </ul>
       </div>
     </div>
   </div>
   )
 }
 
 export default Cards