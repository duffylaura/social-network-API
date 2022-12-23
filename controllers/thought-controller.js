//List of what is needed based on routes 

// getThoughts,
// createThought,

// getThoughtById,
// updateThoughtById, 
// deleteThoughtById,

// createReaction,
// deleteReaction,

//import {Thought} from '../models/thought';

const { Thought } = require("../models");

module.exports = {

    getThoughts(req,res){
        Thought.find()
        .then ((thoughts)=>res.json(thoughts))
        .catch((err)=>res.status(500).json(err)); 
    },

    createThought(req,res){
        Thought.create(req.body)
        .then((thought)=>res.json(thought))
        .catch((err)=>{
            return res.status(500).json(err); 
        });
    },

    getThoughtById(req,res){
        Thought.findOne({_id: req.params.thoughtId})
        .then((thought) => !thought ? res.status(404).json({ message: 'There is no thought with this ID.' })
            : res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    updateThoughtById(req,res){
        Thought.findOneAndUpdate({_id: req.params.thoughtId}, req.body,{new:true, runValidators:true})
        .then((thought) => !thought ? res.status(404).json({ message: 'There is no thought with this ID.' })
            : res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    deleteThoughtById(req,res){
        Thought.findOneAndDelete({_id: req.params.thoughtId})
        .then((thought) => !thought ? res.status(404).json({ message: 'There is no thought with this ID.' })
            : res.json("Thought has been deleted!"))
        .catch((err) => res.status(400).json(err));
    },

    createReaction(req,res){
        Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$addToSet:{reactions: req.body}},{runValidators: true, new: true})
        .then((thought) => {!thought? res.status(404).json({ message: "No thought with this id!" })
                : res.json(thought);})
        .catch((err) => res.status(500).json(err));
        },

    deleteReaction(req,res){
        Thought.findOneAndUpdate({_id: req.params.thoughtId},{$pull:{reactions:{reactionId: req.params.reactionId}}},{runValidators: true, new: true})
        .then((thought) => !thought? res.status(404).json({ message: "No thought with this id!" })
            : res.json("Reaction has been deleted!"))
        .catch((err) => res.status(500).json(err));
        },
};
    

