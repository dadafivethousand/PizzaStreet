import '../Stylesheets/Menu.css'
import { useState } from 'react';
import { Categories, Pastas, Sides, PizzaMenuItems, Beverages, Desert, Specialty } from './MenuItems';
import pizza from '../Images/pizzaimg.jpg'

 

export default function Menu() {
    const [menu, setMenu] = useState('Pizza');

    function handleClick(category) {
        setMenu(category);
    }

    function formatPrice(price) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    }
    

    function renderMenuItems() {
        let items;
        switch(menu) {
            case 'Pizza':
                items = PizzaMenuItems;
                break;
            case 'Beverages':
                items = Beverages;
                break;
            case 'Desert':
                items = Desert;
                break;
            case 'Sides':
                items = Sides;
                break;
            case 'Pasta':
                items = Pastas;
                break;
            case 'Specialty':
                items = Specialty;
                break;
            default:
                items = 'Pizza';
        }

        return (
            <>
                {items.map((item, index) => (
                    <div className='ItemPrice' key={index}>
                        <div className='ItemName'>{item.type}</div>
                        <div className='Price'>{formatPrice(item.price)}</div>
                    </div>
                ))}

               
            </>
        );;
    }

    return (
        <div className="MenuContainer" id='menu'>
            <div className='FirstColumn'>
                <h1 className='Heading'>Menu</h1>
                <ul className='MenuCategories'>
                    {Categories.map((category, index) => (
                        <li className={menu === category? 'active': null}   key={index} onClick={() => handleClick(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='SecondColumn'>
                <div className='Menu'>
                    {renderMenuItems()}
                </div>
            </div>
        </div>
    );
}
