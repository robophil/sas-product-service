const Waterline = require('waterline')
const config = require('../config')

// Define your collection (aka model) 
module.exports = Waterline.Collection.extend(Object.assign(config, {

    tableName: 'product',

    identity: 'product',

    attributes: {

        name: {
            type: 'string',
            required: true,
            unique: true
        },

        url: {
            type: 'string',
            required: true,
            unique: true
        },

        imageurl: {
            type: 'string',
            required: true
        },

        price: {
            type: 'string',
            required: true
        },

        specialPrice: {
            type: 'string',
            required: true
        },

        stockInfo: {
            type: 'string',
            required: true
        },

        version: {
            type: 'string'
        },

        //model
        store: {
            type: 'objectid'
        },

        //model
        category: {
            type: 'objectid'
        },

        //model
        subcategory: {
            type: 'objectid'
        }
    }
}))