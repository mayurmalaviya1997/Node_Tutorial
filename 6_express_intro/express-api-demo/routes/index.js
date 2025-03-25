const { getAllItems } = require('../controller/index.js');
const expess = require('express');
const router = expess.Router()

router.get('/', getAllItems);
router.get('/items', getAllItems);

// router.get('/api/items/:id', getItem);
// router.post('/api/items/:id', createItem);
// router.put('/api/items/:id', updateItem);
// router.delete('/api/items/:id', deleteItem);

module.exports = router;
