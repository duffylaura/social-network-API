//List of what is needed based on routes
// getUsers, 
// createUser, 
// getUserById,
// updateUserById, 
// deleteUserById,
// addFriend, 
// deleteFriend

import {User} from '../models/user';

module.exports = {
    getUsers(req, res) {
        User.find()
        .then ((users)=>res.json(users))
        .catch((err)=>res.status(500).json(err)); 
    },

    createUser(req, res) {
        User.create(req.body)
        .then((user)=>res.json(user))
        .catch((err)=>{
            return res.status(500).json(err); 
        });
    },

    getUserById(req,res){
        User.findOne({_id: req.params.userId})
        .then((user) => !user ? res.status(404).json({ message: 'There is no user with this ID.' })
            : res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    updateUserById(req,res){
        User.findOneAndUpdate({_id: req.params.userId}, {$set: req.body}, {runValidators: true, new: true} )
        .then((user) => !user ? res.status(404).json({ message: 'There is no user with this ID.' })
            : res.json(user))
        .catch((err)=>res.status(500).json(err)); 
    },

    deleteUserById(req, res){
        User.findOneAndDelete({_id: req.params.userId})
        .then((user) => !user ? res.status(404).json({ message: 'There is no user with this ID.' })
            : res.json("User has been deleted."))
        .catch((err)=>res.status(400).json(err));
    },

    addFriend(req, res){
        User.findOneAndUpdate({_id: req.params.userId}, {$addToSet: {friends: req.body}}, {runValidators: true, new: true})
        .then((user) => !user ? res.status(404).json({ message: 'There is no user with this ID.' })
            : res.json(user))
        .catch((err)=>res.status(500).json(err));
    },

    deleteFriend(req, res){
        User.findOneAndUpdate({_id: req.params.userId}, {$pull: {friends: req.params.friendId}}, {runValidators: true, new: true})
        .then((user) => !user ? res.status(404).json({ message: 'You do not have a friend with this ID.' })
            : res.json(user))
        .catch((err)=>res.status(500).json(err)); 
    }
}