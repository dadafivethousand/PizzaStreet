import pizza from '../Images/pizzaimg.jpg'
import onion from '../Images/onion.jpg'
import veal from '../Images/veal.jpg'
import beverages from '../Images/beverages.jpg'
import lasagna from '../Images/lasagna.jpg'
import cake from '../Images/cheesecake.jpg'

export const PizzaMenuItems = [
{type: 'Pepperoni', price: 10, img:pizza}, 
{type: 'Cheese', price: 10},
{type: 'Hawaiian', price: 10},
{type: 'Mushroom', price: 10 },
{type: 'Vegetarian', price: 10},
]

export const Sides = [
    {type: 'Fries', price: 4}, 
    {type: 'Onion Rings', price: 4, img: onion},
    {type: 'Potato Wedges', price: 4},
    ]

export const Pastas = [
    {type: 'Chicken Alfredo', price: 14}, 
    {type: 'Shrimp', price: 14},
    {type: 'Spaghetti with Tomato Sauce', price: 12},
    {type: 'Lasagna', price: 12, img:lasagna},

]


export const Beverages = [
    {type: 'Coke', price: 1, img:beverages}, 
{type: 'Pepsi', price: 1},
{type: 'Sprite', price: 1},
{type: 'Water', price: 1},
{type: 'Juice', price: 1},
]

export const Desert = [
{type: 'Cake', price: 1, img: cake}, 
{type: 'Ice Cream', price: 1},
{type: 'Chocolate', price: 1},
{type: 'Fruit', price: 1},
{type: 'Tiramisu', price: 1},
]

export const Specialty = [
    {type: 'Panzerotti', price: 10},
    {type: 'Chicken Wings', price: 12},
    {type: 'Veal Sandwich', price: 10, img:veal},
    {type: 'Steak Sandwich', price: 10},
    {type: 'Garlic Bread', price: 5},
]
 
export const Categories = [
    'Pizza', 'Sides', 'Pasta', 'Beverages', 'Desert', 'Specialty'
]