const cote = require('cote')

const productResponder = new cote.Responder({
    name: 'SAS-PRODUCT-SERVICE: product-responder ',
    namespace: '',
    respondsTo: ['product.create', 'product.update', 'product.get', 'product.delete']
})

/**
 * Responder: {model, body}
 * Create a product. req.body eg {name: 'foo'} is the object to be created
 */
productResponder.on('product.create', (req) => {
    switch (req.model) {
        case "product": return Product.create(req.body)

        default: return null
    }
})

/**
 * Responder: {model, body}
 * Update a product. req.query is an object eg {id: 1}, req.body eg {name: 'foo'} is the object to be updated
 */
productResponder.on('product.update', (req) => {
    switch (req.model) {
        case "product": return Product.update(req.query, req.body)

        default: return null
    }
})

/**
 * Responder: {model, query}
 * Gets a product. req.query is an object eg {id: 1}
 */
productResponder.on('product.get', (req) => {
    switch (req.model) {
        case "product": return Product.get(req.query)

        default: return null
    }
})

/**
 * Responder: {model, query}
 * Deletes a product. req.query is an object eg {id: 1}
 */
productResponder.on('product.delete', (req) => {
    switch (req.model) {
        case "product": return Product.delete(req.query)

        default: return null
    }
})