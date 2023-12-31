const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {          // User has many Posts
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Post.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Comment, {     // Post has many Comments
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Comment, {     // User has many Comments
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  
module.exports = { User, Post, Comment };