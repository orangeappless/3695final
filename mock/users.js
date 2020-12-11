// const uuid = require('uuid');

// console.log(uuid.v4());

/*
For dev/testing purposes, the IDs for the first two obecjts in the
mock data were hard-coded in (after I generated them with uuid.v4()).
*/
let users = [
  { 
    id: '195312f7-3b4b-45a5-b7fa-3d72d4cf1213', 
    username: 'admin',
    subscribedPosts: [
      '26c18ac3-bc18-41b9-bf86-f244032d878b',
      '4c002b1a-2d00-493d-ad2f-e6a08ec2c06b',
      '756a1ec4-1f76-44e9-823f-2a59a24e24e4'
    ]
  },
  { 
    id: 'b26cef05-a7d2-4be7-ac46-618ad8c231a2', 
    username: 'wta',
    subscribedPosts: [
      '4c002b1a-2d00-493d-ad2f-e6a08ec2c06b'
    ]
  },
];

module.exports = {
  users: users
}
