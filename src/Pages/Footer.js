import '../Stylesheets/Footer.css'
import { Link } from 'react-scroll'
export default function Footer() {
 return(
    <div className='footer'>
    <div className='container'>
        <ul>
            <li className='item'>
            <Link to='hero' syp={true} smooth={true}   duration={500}  >Home  </Link>
            </li>
            <li className='item'>
            <Link to='about' syp={true} smooth={true}   duration={500}  >About  </Link>
            </li>
            <li className='item'>
            <Link to='menu' syp={true} smooth={true}   duration={500}  >Menu  </Link>
            </li>
            <li className='item'>
            <a href="https://www.ubereats.com/store/food-street-toronto/6EaysfLnVH-EftuNpmlU8w?diningMode=DELIVERY" target="_blank" rel="noopener noreferrer" >Order</a>
            </li>
            <li className='item'>
                        <a href="https://www.google.com/maps/place/Food+Street+Toronto/@43.8805911,-79.3819457,11z/data=!4m6!3m5!1s0x89d4d152db16f37f:0xcd7251c597a0d2a4!8m2!3d43.7693609!4d-79.2815096!16s%2Fg%2F11l2v60zy5?entry=ttu" target="_blank" rel="noopener noreferrer" >Contact Us</a>
                    </li>
        </ul>
        <div className='bottom'>
            <span className='line'></span>
            <p>2023 Pizza Street Inc. All rights reserved</p>
        </div>
    </div>
</div>
 )
}