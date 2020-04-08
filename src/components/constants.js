import burger from '../assests/images/nav-links/burger.jpg';
import pizza from '../assests/images/nav-links/pizza.jpg';
import salad from '../assests/images/nav-links/salad.jpg';
import drink from '../assests/images/nav-links/drink.jpg';
import sushi from '../assests/images/nav-links/sushi.jpg';
import wok from '../assests/images/nav-links/wok.jpg';
import promo1 from '../assests/images/promo/promo1.jpeg';
import promo2 from '../assests/images/promo/promo2.jpeg';
import promo3 from '../assests/images/promo/promo3.jpeg';

export const NAV_LINKS = [
    {title: 'Pizza', url: '/pizza', imgUrl: pizza},
    {title: 'Salads', url: '/salads', imgUrl: salad},
    {title: 'Burgers', url: '/burgers', imgUrl: burger},
    {title: 'Sushi', url: '/sushi', imgUrl: sushi},
    {title: 'Wok', url: '/wok', imgUrl: wok},
    {title: 'Drinks', url: '/drinks', imgUrl: drink}
];

export const PROMO_ITEMS = [
    {
        src: promo1,
        altText: 'Promo 1'
    },
    {
        src: promo2,
        altText: 'Promo 2'
    },
    {
        src: promo3,
        altText: 'Promo 3'
    }
];