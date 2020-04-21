export const products = [
    {
        model: 'samsung-galaxy-s10',
        img: '/images/samsung-galaxy-s10.jpg',
        price: 300.50,
        id: 1,
        inCart: 1,
        inStock: 10,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eligendi, dolorem fugit doloremque et deleniti minus obcaecati iusto accusantium voluptatibus veniam? Dolor quae quidem explicabo veritatis, accusamus illum sapiente voluptates aliquam veniam est facilis beatae, saepe eum molestiae repellat doloribus et ullam illo error excepturi! Sequi sapiente unde fugit quidem!'
    },
    {
        model: 'samsung-galaxy-s20+',
        img: '/images/samsung-galaxy-s20+.jpg',
        price: 400.30,
        id: 2,
        inCart: 1,
        inStock: 3,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eligendi, dolorem fugit doloremque et deleniti minus obcaecati iusto accusantium voluptatibus veniam? Dolor quae quidem explicabo veritatis, accusamus illum sapiente voluptates aliquam veniam est facilis beatae, saepe eum molestiae repellat doloribus et ullam illo error excepturi! Sequi sapiente unde fugit quidem!'
    },
    {
        model: 'LG-g710EM',
        img: '/images/lg-g710EM.jpg',
        price: 400,
        id: 3,
        inCart: 1,
        inStock: 24,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eligendi, dolorem fugit doloremque et deleniti minus obcaecati iusto accusantium voluptatibus veniam? Dolor quae quidem explicabo veritatis, accusamus illum sapiente voluptates aliquam veniam est facilis beatae, saepe eum molestiae repellat doloribus et ullam illo error excepturi! Sequi sapiente unde fugit quidem!'
    },
    {
        model: 'huawei-Y7',
        img: '/images/huawei-Y7.jpg',
        price: 180.50,
        id: 4,
        inCart: 1,
        inStock: 4,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eligendi, dolorem fugit doloremque et deleniti minus obcaecati iusto accusantium voluptatibus veniam? Dolor quae quidem explicabo veritatis, accusamus illum sapiente voluptates aliquam veniam est facilis beatae, saepe eum molestiae repellat doloribus et ullam illo error excepturi! Sequi sapiente unde fugit quidem!'
    },
    {
        model: 'huawei-p30',
        img: '/images/huawei-p30.jpg',
        price: 220.30,
        id: 5,
        inCart: 1,
        inStock: 0,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eligendi, dolorem fugit doloremque et deleniti minus obcaecati iusto accusantium voluptatibus veniam? Dolor quae quidem explicabo veritatis, accusamus illum sapiente voluptates aliquam veniam est facilis beatae, saepe eum molestiae repellat doloribus et ullam illo error excepturi! Sequi sapiente unde fugit quidem!'
    },
    {
        model: 'sony-xperia-z5',
        img: '/images/sony-xperia-z5.jpg',
        price: 280.99,
        id: 6,
        inCart: 1,
        inStock: 14,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eligendi, dolorem fugit doloremque et deleniti minus obcaecati iusto accusantium voluptatibus veniam? Dolor quae quidem explicabo veritatis, accusamus illum sapiente voluptates aliquam veniam est facilis beatae, saepe eum molestiae repellat doloribus et ullam illo error excepturi! Sequi sapiente unde fugit quidem!'
    },
]

export const productDetails = {
    model: '',
    img: '',
    price: 0,
    id: 0,
    inCart: false,
    inStock: 0,
    description: ''
}

export const deliveryOptions = [
    {
        id: 1,
        form: 'courier DPD',
        price: 10,
        checked: false

    },
    {
        id: 2,
        form: 'traditional post office',
        price: 3,
        checked: false
    },
    {
        id: 3,
        form: 'personal pickup',
        price: 0,
        checked: false
    }
]