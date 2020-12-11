# 3695final
GraphQL API for ACIT-3695 final.

Simply run `npm i` to install dependencies, `npm start` to start the server, and then navigate to http://localhost:4000/graphql to test queries.

Sample queries (as per exam guidelines) are below, and can be ran in GraphiQL. They will return (and use) data from the mock data in `./mock`. The mutations will create a JSON object, which is returned and can be viewed in the query.

I did not include subscriptions because I could not figure out how to get it working (not pushed).

#### Get Post by post ID
```
# Query
{
  postByID(id:"4c002b1a-2d00-493d-ad2f-e6a08ec2c06b") {
    id
    title
    body
    creator {
      id
      username
    }
  }
}

# Expected output
{
  "data": {
    "postByID": {
      "id": "4c002b1a-2d00-493d-ad2f-e6a08ec2c06b",
      "title": "Hello Second World!",
      "body": "Just the second post.",
      "creator": {
        "id": "b26cef05-a7d2-4be7-ac46-618ad8c231a2",
        "username": "wta"
      }
    }
  }
}
```

#### Get Posts by topic
```
# Query
{
  postsByTitle(title:"Hello First World!") {
    id
    title
    body
    creator {
      username
    }
    comments {
      id
      userID {
        username
      }
      response
    }
  }
}

# Expected output
{
  "data": {
    "postsByTitle": [
      {
        "id": "26c18ac3-bc18-41b9-bf86-f244032d878b",
        "title": "Hello First World!",
        "body": "First post here!",
        "creator": {
          "username": "admin"
        },
        "comments": [
          {
            "id": "5deec8d2-cf3f-491c-a12c-fce79e321dbc",
            "userID": {
              "username": "admin"
            },
            "response": "First comment (for first post)!"
          },
          {
            "id": "c5fa8071-a62d-4545-9178-70918f29552f",
            "userID": {
              "username": "wta"
            },
            "response": "Another comment in first post!"
          },
          {
            "id": "7f9e8b50-a5c8-4f7d-8faa-b796e0ac5ed3",
            "userID": {
              "username": "wta"
            },
            "response": "More comments in the first post."
          }
        ]
      }
    ]
  }
}
```

#### Create new Post
```
# Query
mutation{
  createPost(title:"test title", body:"test body", creator:"wta") {
    id
    title
    body
    creator {
      id
      username
    }
  }
}

# Expected output
{
  "data": {
    "createPost": {
      "id": "a1f4e31f-7d54-4c31-aba2-85b529d5d4e4",
      "title": "test title",
      "body": "test body",
      "creator": {
        "id": "b26cef05-a7d2-4be7-ac46-618ad8c231a2",
        "username": "wta"
      }
    }
  }
}
```

#### Create new Comment
```
# Query
mutation {
  addComment(response:"comment test!", userID:"b26cef05-a7d2-4be7-ac46-618ad8c231a2", postID:"756a1ec4-1f76-44e9-823f-2a59a24e24e4") {
    id
    postID {
      title
    }
    userID {
      username
    }
  }
}

# Expected output
{
  "data": {
    "addComment": {
      "id": "35abed49-daa1-4065-b9af-cf419f25ba2e",
      "postID": {
        "title": "This is the third post"
      },
      "userID": {
        "username": "wta"
      }
    }
  }
}
```

#### Respond to Comment (done by linking a comment to a parent comment)
```
# Query
mutation {
  addReply(response:"replying to first comment", userID:"b26cef05-a7d2-4be7-ac46-618ad8c231a2", postID:"756a1ec4-1f76-44e9-823f-2a59a24e24e4", parentCommentID:"5deec8d2-cf3f-491c-a12c-fce79e321dbc") {
    parentCommentID {
      userID {
        username
      }
      response
    }
    id
    userID {
      username
    }
      response
  }
}

# Expected output
{
  "data": {
    "addReply": {
      "parentCommentID": {
        "userID": {
          "username": "admin"
        },
        "response": "First comment (for first post)!"
      },
      "id": "504871e9-4624-407d-901c-89f7ba94a1c7",
      "userID": {
        "username": "wta"
      },
      "response": "replying to first comment"
    }
  }
}
```
