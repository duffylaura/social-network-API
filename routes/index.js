const router = require('express').Router();

// Import all of the API routes 
const apiRoutes = require('./api');

// add prefix of `/api` to all of the api routes
router.use('/api', apiRoutes);

// Wildcard routes (i.e. routes that don't start with /api)
router.use((req, res)=>{res.status(404).send('This route does not exist! Make sure you start with /api!!')});


module.exports = router;