const productsController = require("./controller/productsController")

module.exports=[
    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productsController.getAll 

        },

    {
        method: 'GET',
        path: `/api/v1/products/{id}`,
        handler: productsController.find 
        },

    {
        method: 'POST',
        path: '/api/v1/products',
        handler: productsController.save 
        },

    {
        method: 'PUT',
        path: `/api/v1/products/{id}`,
        handler: productsController.update 
            },

    {
        method: 'DELETE',
        path: `/api/v1/products/{id}`,
        handler: productsController.remove 
     
        },

]
