const express=require("express");

const newPost=require('../models/Post');
const Post = require("../models/Post");
const router=express.Router();



router.get("/", async(req, res) => {
    try {
      const posts=await Post.find();
      res.json(posts)
    } catch (error) {
      res.json({message:error})
    }
});

router.post('/', async ( req, res) => {
  console.log(req.body);
  const anotherPost = new newPost({
    title: req.body.title,
    description: req.body.description,
  });
  try{
 const savedPost=await anotherPost.save();
    res.json(savedPost);
  }catch(error){
    res.json({message: error})
  }
});
router.get("/specific", (req, res) => {
  res.send("we are on the specific post page now!!");
});

//get back a specific post
router.get('/:id',async(req,res)=>{
  try {
    const post = await Post.findById(req.params.id);
  } catch (error) {
    res.json({message: error})
  }
 
  
  // console.log(req.params.id);
})
//delete a post

router.delete('/:id',async(req, res)=>{
  try {
    const removed= await Post.remove({_id:req.params.id}); 
    res.json(removed)
  } catch (error) {
    res.json({ message: error })
  }
});

//udpate a post
router.patch("/:id", async (req, res)=>{
  try {
    const updatedpost=await Post.updateOne({_id:req.params.id}, {$set :{title: req.body.title}});
    res.json(updatedpost);
  } catch (error) {
    res.json({ message: error })
  }
})
module.exports=router;