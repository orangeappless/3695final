// const uuid = require('uuid');

// console.log(uuid.v4());

/*
For dev/testing purposes, the IDs for the first two obecjts in the
mock data were hard-coded in (after I generated them with uuid.v4()).
*/
let comments = [
  { 
    id: '5deec8d2-cf3f-491c-a12c-fce79e321dbc', 
    response: 'First comment (for first post)!', 
    userID: '195312f7-3b4b-45a5-b7fa-3d72d4cf1213', 
    postID: '26c18ac3-bc18-41b9-bf86-f244032d878b',
    parentCommentID: null 
  },
  { 
    id: 'b4e7e1f1-0a91-49b3-8d75-f5a4227aa797', 
    response: 'Second comment (for second post)?', 
    userID: '195312f7-3b4b-45a5-b7fa-3d72d4cf1213', 
    postID: '4c002b1a-2d00-493d-ad2f-e6a08ec2c06b',
    parentCommentID: null  
  },
  { 
    id: 'c5fa8071-a62d-4545-9178-70918f29552f', 
    response: 'Third comment (for third post)...', 
    userID: 'b26cef05-a7d2-4be7-ac46-618ad8c231a2', 
    postID: '756a1ec4-1f76-44e9-823f-2a59a24e24e4',
    parentCommentID: null  
  },
  { 
    id: 'c5fa8071-a62d-4545-9178-70918f29552f', 
    response: 'Another comment in first post!', 
    userID: 'b26cef05-a7d2-4be7-ac46-618ad8c231a2', 
    postID: '26c18ac3-bc18-41b9-bf86-f244032d878b',
    parentCommentID: null  
  },
  { 
    id: '7f9e8b50-a5c8-4f7d-8faa-b796e0ac5ed3', 
    response: 'More comments in the first post.', 
    userID: 'b26cef05-a7d2-4be7-ac46-618ad8c231a2', 
    postID: '26c18ac3-bc18-41b9-bf86-f244032d878b',
    parentCommentID: null  
  },
];

module.exports = {
  comments: comments
}
