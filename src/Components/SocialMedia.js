import {   FaPhone, FaHome, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import '../Stylesheets/Socialmedia.css'
export default function SocialMedia() {

    return(<div className='Frame'>  


    <div className='Text'>
     <div className='Left'>
        <div className='number'>
<div className='icon'><FaPhone /></div><p className='txt'>  416-291-0555  <br/> </p>
</div>





<div className='socialMediaIcons'>
<a className='icon' href="/" >  <FaInstagram size={40} color='white'  /> </a>
 
 
<a className='icon' href="/" >  <FaFacebookF  size={40} color='white'   /> </a>
 
 
<a  className='icon'  href="/" >  <FaTwitter  size={40} color='white' /> </a>
</div>
</div>
 
<div className='right'>
<div className='number'>
<div className='icon'><FaHome /></div><p className='txt'> Unit B3 - 7 Progress Ave, Scarborough <br/> </p>
</div>
<div className='map'
      dangerouslySetInnerHTML={{
        __html: `
          <iframe
            width="250px"
            height="250px"
            style="border:0"
            loading="lazy"
            allowfullscreen
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.1683184759813!2d-79.28408452463952!3d43.76936474491113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d152db16f37f%3A0xcd7251c597a0d2a4!2sFood%20Street%20Toronto!5e0!3m2!1sen!2sca!4v1700633230278!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `,
      }}
    />

    </div> 
    </div> 
</div>
)
}