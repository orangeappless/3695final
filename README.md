# 3695final
GraphQL API for ACIT-3695 final.

Simply run `npm i` to install dependencies, and then navigate to http://localhost:4000/graphql to test queries.

Sample queries (as per exam guidelines) are below, and can be ran in GraphiQL.

#### Get Post by post ID
```
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
```

#### Get Posts by topic
```
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
```

#### Create new Post
```
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
```

#### Create new Comment
```
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
```

#### Respond to Comment (done by linking a comment to a parent comment)
```
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
```
