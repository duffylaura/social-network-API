const router = require("express").Router();
const {
  
  getThoughts,
  createThought,

  getThoughtById,
  updateThoughtById, 
  deleteThoughtById,

  createReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

///api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(createReaction);

// /api/thoughts/:thoughtId/reactions/reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;