const express = require('express');
const router = express.Router();

router.get('/api/courses', (req, res) => {
    res.send([
        {id: 1, name: 'Java'},
        {id: 2, name: 'Node'},
        {id: 3, name: 'Mongo'}
    ]);
});

module.exports = router;