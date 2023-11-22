import '../Stylesheets/hero.css'

import Reviews from '../Components/Reviews';
export default function Hero() {
    const Order = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return(
        <div className='hero' id='hero'>
            <div className='HeroContainer'>
                    <div className='heroContent'> 
             
 
  
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