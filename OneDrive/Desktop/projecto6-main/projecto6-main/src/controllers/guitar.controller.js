const Guitar = require('../models/Guitar');
const stripe = require('stripe')(process.env.STRIPE_KEY);

exports.getAllGuitars = async (req, res) => {
    try {
        const guitars = await Guitar.find({});
        return res.status(200).json({ guitars });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener las guitarras',
            error: error.message
        })
    }
}

exports.getGuitarById = async (req, res) => {
    try {
        const guitar = await Guitar.findById(req.params.id);
        if (!guitar) return res.status(404).json({ message: 'Guitarra no encontrada' });
        return res.status(200).json({ guitar });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener la guitarra',
            error: error.message
        })
    }
}

exports.createGuitar = async (req, res) => {
    try {
        const { name, price, description, img, currency, slug } = req.body;
        const product = await stripe.products.create({
            name,
            description,
            images: [img],
            metadata: {
                productDescription: description,
                slug
            }
        });

        const stripePrice = await stripe.prices.create({
            unit_amount: price,
            currency,
            product: product.id   
        });

        const newGuitar = await Guitar.create({
            idProd: product.id,
            priceID: stripePrice.id,
            name,
            price,
            description,
            img,
            currency,
            slug
        });

        if (!newGuitar) return res.status(400).json({ error: 'No fue posible crear la guitarra' });

        return res.status(201).json({ datos: newGuitar });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al crear la guitarra',
            error: error.message
        })
    }
}

exports.updateGuitar = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const updatedGuitar = await Guitar.findByIdAndUpdate(
            req.params.id,
            { name, price, description },
            { new: true, runValidators: true }
        )
        if (!updatedGuitar) return res.status(404).json({ message: 'Guitarra no encontrada' });
        return res.status(200).json({ guitarraActualizada: updatedGuitar });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al actualizar la guitarra',
            error: error.message
        })
    }
}

exports.deleteGuitar = async (req, res) => {
    try {
        const deletedGuitar = await Guitar.findByIdAndDelete(req.params.id);
        if (!deletedGuitar) return res.status(404).json({ message: 'Guitarra no encontrada' });
        return res.status(200).json({ message: 'La guitarra se elimino correctamente' });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al eliminar la guitarra',
            error: error.message
        })
    } 
}