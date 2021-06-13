const Product = require('../models/product')

//convertendo o formato da api
const transform = product =>({
    type: 'products',
    id:product.id,
    attributs:{
        name:product.name,
        price:product.price,
    },
    links:{
        self: `/api/v1/products/${product.id}`
    }  
})

//listando todos os produtos
const getAll = async (req, h) =>{
    const products = await Product.find({})
    //mapeando todos os produtos no formato json na funcao transform
    return {data:products.map(transform)};
}

 const save = async (req, h) =>{
    //recebendo os valores do body
    const { name, price } = req.payload
    //instanciando o model    
     const product = new Product

     product.name = name
     product.price = price  

    await product.save()

    //exibindo o formato da api nos padroes json.api
   
    return h.response(transform(product)).code(201);
}

const find = async (req,h) =>{
    //pegando um produto
    const product = await Product.findById({_id:req.params.id})
    return { data:transform(product)}
}

const update = async (req,h) =>{
    // Update a categorie by id
    //pegando id do produto
   const _id = { _id: req.params.id }

   //pegando os campos para atualizar 
   const product = {
    name: req.payload.name,
    price:req.payload.price

    }
   //atualizando os campos
    await Product.findByIdAndUpdate(_id,product)
    return h.response().code(204);

}


const remove = async (req,h) =>{
    //excluindo um produto
    await Product.findOneAndDelete({_id:req.params.id})
    return h.response().code(204);
}

module.exports={
    getAll,
    save,
    find,
    update,
    remove
}
