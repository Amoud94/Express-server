const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.post('/findOne', async (req, res) => {
    const postId = req.body.postId;
    console.log(postId)
    try {
        const posts = await Post.findOne({_id:postId});
        res.json(posts);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.post('/add', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        imgsrc: req.body.imgsrc
    });
    try {
        const savePost = await post.save();
        res.json(savePost);
    } catch (err) {
        res.json({
            message: err
        });
    };
});

router.post('/update', async (req, res) => {

    const postId = req.body.postId;
    console.log(postId)
    try {
        const newPost = await Post.updateOne({_id: postId},{
            $set: {
                title: req.body.newtitle,
                description: req.body.newdescription,
                imgsrc: req.body.newimgsrc
            }
        });
        res.json(newPost);
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/delete', async (req,res) =>{
    const postId = req.body.postId;
    try {
        const removePost = await Post.deleteOne({_id:postId})
        res.json(removePost);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;