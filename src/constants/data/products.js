import hamburguesaFrancesa from '../../../assets/images/hamburguesaFrancesa.jpg'
import hamburguesaCheddar from '../../../assets/images/hamburguesaQueso.jpg'
import pizzaMargarita from '../../../assets/images/pizzaMargarita.jpg'
import pizzaPimiento from '../../../assets/images/pizzaPimiento.jpg'
import ensaladaVerde from '../../../assets/images/ensaladaVerde.jpg'
import ensaladaEspinaca from '../../../assets/images/ensaladaEspinaca.jpg'
import empanadaCarne from '../../../assets/images/empanadaCarne.jpg'
import empanadaPollo from '../../../assets/images/empanadaPollo.jpg'
import sandwichPollo from '../../../assets/images/sandwichPollo.jpg'
import sandwichBondiola from '../../../assets/images/sandwichBondiola.jpg'


export const PRODUCTS = [
    {
        id: 1,
        title: 'Hamburguesa Con Cheddar',
        description:'lorem ipsum maledictus imperium plus ultra amicus curia habeas pax et gloria.',
        categoryId: 1,
        popular: false,
        price: 13.20,
        image: hamburguesaCheddar
    },
    {
        id: 2,
        title: 'Hamburguesa Francesa',
        description:'lorem ipsum maledictus imperium plus ultra amicus curia habeas pax et gloria.',
        categoryId: 1,
        popular: true,
        price: 16.80,
        image: hamburguesaFrancesa
    },
    {
        id: 3,
        title: 'Pizza Margarita',
        description:'Pizza hecha en horno de Leña, con base de tomate, mozzarella y albahaca.',
        categoryId: 2,
        popular: false,
        price: 25.70,
        image: pizzaMargarita
    },
    {
        id: 4,
        title: 'Pizza con Pimiento',
        description:'Pizza hecha en horno de Leña, con base de tomate, mozzarella y Pimientos.',
        categoryId: 2,
        popular: true,
        price: 27.50,
        image: pizzaPimiento
    },
    {
        id: 5,
        title: 'Ensalada Verde',
        description:'lorem ipsum maledictus imperium plus ultra amicus curia habeas pax et gloria.',
        categoryId: 3,
        popular: false,
        price: 13.50,
        image: ensaladaVerde
    },
    {
        id: 6,
        title: 'Ensalada de Espinaca',
        description:'lorem ipsum maledictus imperium plus ultra amicus curia habeas pax et gloria.',
        categoryId: 3,
        popular: true,
        price: 11.20,
        image: ensaladaEspinaca
    },
    {
        id: 7,
        title: 'Empanada de Carne',
        description:'lorem ipsum maledictus imperium plus ultra amicus curia habeas pax et gloria.',
        categoryId: 4,
        popular: false,
        price: 5.10,
        image: empanadaCarne
    },
    {
        id: 8,
        title: 'Empanada de Pollo',
        description:'lorem ipsum maledictus imperium plus ultra amicus curia habeas pax et gloria.',
        categoryId: 4,
        popular: true,
        price: 5.10,
        image: empanadaPollo
    },
    {
        id: 9,
        title: 'Sandwich de Pollo',
        description:'lorem ipsum maledictus imperium plus ultra amicus curia habeas pax et gloria.',
        categoryId: 5,
        popular: false,
        price: 14.40,
        image: sandwichPollo
    },
    {
        id: 10,
        title: 'Sandwich de Pastrami',
        description:'lorem ipsum maledictus imperium plus ultra amicus curia habeas pax et gloria.',
        categoryId: 5,
        popular: true,
        price: 17.80,
        image: sandwichBondiola
    },

]