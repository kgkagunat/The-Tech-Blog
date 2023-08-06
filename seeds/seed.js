const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = [
  {
    username: 'techGuy_123',
    password: 'Techno1234!'
  },
  {
    username: 'methodMan890',
    password: 'Methods_456'
  },
  {
    username: 'megaStudio1',
    password: 'The_Mega_Studio_23'
  },
];

const postData = [
  {
    title: 'RAM usage',
    content: 'How much RAM do I need to use?',
    user_id: 1
  },
  {
    title: 'Audio Codecs',
    content: 'What are the types of audio codecs I can use?',
    user_id: 2
  },
];

const commentData = [
  {
    comment_text: 'Probably only need 8GB of RAM for normal computer usage and browsing',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'The most common is WAV and MP3. WAV is lossless (uncompressed) file, while MP3 is lossy (compressed).',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Some of the other types of audio codes you might see is AIFF (Audio Interchange File Format). This is a lossless file.',
    user_id: 3,
    post_id: 2
  },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData);

  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
