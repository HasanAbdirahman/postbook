const Post = require("../models/post");

async function create(req, res) {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      postedBy: req.user._id,
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deletePost(req, res) {
  try {
    let post = await Post.findById(req.params.id);
    if (req.user._id == post.postedBy) {
      let deletedPost = await Post.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedPost);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    let edit = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        new: true,
      }
    );
    res.status(200).json(edit);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  create,
  index,
  deletePost,
  update,
};
