import '../Stylesheets/hero.css'
import logo from '../Images/logo.png'
import {  FaHome, FaPhone, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
export default function Hero() {
    const Order = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return(
        <div className='hero' id='hero'>
            <div className='HeroContainer'>
                    <div className='heroContent'> 
             
        

                 <div className='Phone'>  
                    <p className='number'>  416-291-0555  <br/> </p>
                    <p className='Address'>
                    7 Progress Ave, Scarborough, ON
                    </p>
                
                    
<div className='socialMediaIcons'>
                    <a >  <FaInstagram  /> </a>
                    <a >  <FaFacebookF   /> </a>
                    <a >  <FaTwitter   /> </a>
                    </div>
                    </div>
                    <button onClick={()=>Order('https://www.ubereats.com/store/food-street-toronto/6EaysfLnVH-EftuNpmlU8w?diningMode=DELIVERY')} className='uber-eats-button'>Order Now</button>
                 
                    </div>
               <div className='scheduleParent'>
<div className='schedule'>
 
                    <p className='h'>Monday - Friday:<br/> 11:30 AM - 11 PM </p>
                    <p  className='h'>Saturday:<br/> Noon - 11 PM </p>
                    <p  className='h'>Sunday:<br/> Noon - 10 PM </p>
                    
                    </div>
                    </div>  

            </div>


        </div>
    )
}