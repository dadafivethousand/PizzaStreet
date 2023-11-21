import '../Stylesheets/About.css'
import pizza from '../Images/download.jpg'
import Reviews from '../Components/Reviews';
import Meal from '../Images/meal.jpg'
export default function About() {
 
    return (
        <div className="AboutContainer" id='about'>
        <div className='AboutFrame'>
            <div className = "AboutText">
   <p>
  Pizza Street is the city's prime destination for authentic, handcrafted pizza. Established in 2023, Pizza Street has already become a local favourite. 
  Our chefs, seasoned with years of experience, meticulously handpick the freshest local ingredients, ensuring each pizza is a celebration of flavor and quality. Join us for an unforgettable pizza experience where tradition meets innovation in every bite.
</p>

</div>
</div>
  
<Reviews />
          
          

        </div>

    );
}