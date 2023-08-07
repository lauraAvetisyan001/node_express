const express = require("express");

const ctrl = require('../../controllers/contacts');
const ctrlWrapper = require('../../helpers/ctrlWrapper'); 

const ValidateBody = require('../../middlewares/ValidateBody');
const {schemas} = require('../../models/contacts');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:id', ctrlWrapper(ctrl.getContactById));

router.post('/', ValidateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.delete('/:id', ValidateBody(schemas.addSchema), ctrlWrapper(ctrl.removeContact));

router.put('/:id', ValidateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById));

router.patch('/:id/favorite', ValidateBody(schemas.favoriteSchema), ctrlWrapper(ctrl.updateFavoriteById));

module.exports = router;