const express = require("express");

const ctrl = require('../../controllers/contacts');
const ctrlWrapper = require('../../helpers/ctrlWrapper'); 

const ValidateBody = require('../../middlewares/ValidateBody');
const schemas = require('../../schemas/contacts');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:id', ctrlWrapper(ctrl.getContactById));

router.post('/', ValidateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

router.put('/:id', ValidateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById))

module.exports = router;