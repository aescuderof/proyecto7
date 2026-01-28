const mongoose = require("mongoose");

const guitarSchema = mongoose.Schema(
    {
        idProd: {
            type: String,
            required: true
        },
        priceID: {
            type: String,
            required: true
        },
        currency: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String
        },
        img: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

const Guitar = mongoose.model('Guitar', guitarSchema);

module.exports = Guitar;
