import burger from '../assests/images/nav-links/burger.jpg';
import pizza from '../assests/images/nav-links/pizza.jpg';
import salad from '../assests/images/nav-links/salad.jpg';
import drink from '../assests/images/nav-links/drink.jpg';
import sushi from '../assests/images/nav-links/sushi.jpg';
import wok from '../assests/images/nav-links/wok.jpg';
import promo1 from '../assests/images/promo/promo1.jpeg';
import promo2 from '../assests/images/promo/promo2.jpeg';
import promo3 from '../assests/images/promo/promo3.jpeg';

export const PRODUCT_TYPES = [
    {title: 'Pizza', type: 'pizza', imgUrl: pizza},
    {title: 'Salads', type: 'salads', imgUrl: salad},
    {title: 'Burgers', type: 'burgers', imgUrl: burger},
    {title: 'Sushi', type: 'sushi', imgUrl: sushi},
    {title: 'Wok', type: 'wok', imgUrl: wok},
    {title: 'Drinks', type: 'drinks', imgUrl: drink}
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

export const AUTH_STATUS = {
    PENDING: 'Pending',
    SUCCESS: 'Success',
    FAILURE: 'Failure',
    NOT_ASKED: 'Not asked'
};

export const AUTH_TABS = [
    {type: 'reg', label: 'Sign up'},
    {type: 'auth', label: 'Sign in'}
];

export const STATUS_MESSAGE = {
    SERVER_ERROR: 'There is some wrong in our server. We already know about it and are in a hurry to fix it.',
    ORDER_NO_AUTH: 'To make an order you need to sign in.',
    ORDER_CREATED: 'Order has been created. We sent you an email that you used for registering as a confirmation. It may take several minutes to deliver the email.',
    ORDER_NOT_CREATED: 'Order has not been created. Please try again later.',
    ORDERS_NOT_RECEIVED: 'We have some problems with your orders, but we will fix it ASAP.',
    SIGN_IN_SUCCESSFUL: 'You have successfully signed in.',
    WRONG_CREDENTIALS: 'User name or password is not correct. Please check it and try again.',
    PASSWORDS_NOT_MATCH: 'The passwords do not match.',
    PASSWORD_SHORT: 'The password length should be at least 4 symbols.',
    PASSWORD_EMPTY: 'The password length should not be empty.',
    USER_CREATED: 'User successfully created.',
    USER_SIGNED_IN: 'Signed in successfully.',
    USER_SIGNED_OUT: 'Signed out successfully.',
    USER_DATA_SAVED: 'Data successfully saved.'
};

export const CURRENCY = [
    {
        title: '$',
        description: 'usd'
    },
    {
        title: '€',
        description: 'eur'
    }
];
