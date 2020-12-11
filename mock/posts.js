// const uuid = require('uuid');

// console.log(uuid.v4());

/*
For dev/testing purposes, the IDs for the first two obecjts in the
mock data were hard-coded in (after I generated them with uuid.v4()).
*/
let posts = [
  { 
    id: '26c18ac3-bc18-41b9-bf86-f244032d878b', 
    title: 'Hello First World!', 
    body: 'First post here!', 
    creator: 'admin',
    comments: [
      '5deec8d2-cf3f-491c-a12c-fce79e321dbc', 
      'c5fa8071-a62d-4545-9178-70918f29552f',
      '7f9e8b50-a5c8-4f7d-8faa-b796e0ac5ed3'    
    ]
  },
  { 
    id: '4c002b1a-2d00-493d-ad2f-e6a08ec2c06b', 
    title: 'Hello Second World!', 
    body: 'Just the second post.', 
    creator: 'wta',
    comments: [
      'b4e7e1f1-0a91-49b3-8d75-f5a4227aa797'
    ]
  },
  { 
    id: '756a1ec4-1f76-44e9-823f-2a59a24e24e4', 
    title: 'This is the third post', 
    body: '^ Topic', 
    creator: '',
    comments: [
      'c5fa8071-a62d-4545-9178-70918f29552f'
    ]
  }
];

module.exports = {
  posts: posts
}
