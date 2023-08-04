const express = require('express')

const ctrl = require('../../controllers/contacts')
const ctrlWrapper = require('../../helpers/ctrlWrapper') 

const router = express.Router()

router.get('/', ctrlWrapper(ctrl.getAll)) 

router.get('/:id', ctrlWrapper(ctrl.getContactById))

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.put('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// }) 

module.exports = router