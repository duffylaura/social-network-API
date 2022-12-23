const router = require("express").Router();

const userRoutes = require('./user-routes');
router.use("/users", userRoutes);

const thoughtRoutes = require('./thought-routes');
router.use("/thoughts", thoughtRoutes);

module.exports = router;