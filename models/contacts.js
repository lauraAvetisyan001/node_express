const {Schema, model} = require('mongoose');
const Joi = require('joi');
const sex = ['men', 'women', 'other'];

const phoneRegExp =  /^\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$/;

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact']
    },
    email: {
        type: String
    },
    phone: {
        type: String,
        match: phoneRegExp,
        unique: true,
        required: true
    },
    sex: {
        type: String,
        enum: sex,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
}, {versionKey: false, timestamps: true});

const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string(),
    favorite: Joi.boolean(),
    sex: Joi.string().valid(...sex),
    phone: Joi.string().pattern(phoneRegExp).required()
});

const favoriteSchema = Joi.object({
    favorite: Joi.boolean().required()
})

const schemas = {
    addSchema,
    favoriteSchema
};

const Contact = model('contact', contactSchema);

module.exports = {
    Contact,
    schemas
};
