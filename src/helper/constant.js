const constant = {
    port: 5000,
    router: {
        user: {
            all: '/users/',
            id: '/:userId/',
        },
        customer: {
            all: '/customers/',
            id: '/:customerId/',
        },
        hotel: {
            all: '/hotels/',
            id: '/:userId/',
        },
        restaurant: {
            all: '/restaurants/',
            id: '/:restaurantId/',
        },
    }
}

module.exports = { constant }