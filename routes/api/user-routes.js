const router = require("express").Router();

//import variables used below from controller folder 
const {
    getUsers, 
    createUser, 
    getUserById,
    updateUserById, 
    deleteUserById,
    addFriend, 
    deleteFriend
} = require('../../controllers/user-controller');

///api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getUserById).put(updateUserById).delete(deleteUserById);

// /api/users/:userId/friends
router.route("/:userId/friends").post(addFriend);

// /api/users/:userId/friends/:friendId`
router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;