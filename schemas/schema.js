const graphql = require('graphql');
const { json } = require('express');
const _ = require('lodash');
const uuid = require('uuid');
const comments = require('../mock/comments');
const posts = require('../mock/posts');
const users = require('../mock/users');

const { 
  GraphQLSchema, 
  GraphQLObjectType, 
  GraphQLID, 
  GraphQLString,
  GraphQLList,
  GraphQLEnumType
} = graphql;

let mockComments = comments.comments;
let mockPosts = posts.posts;
let mockUsers = users.users;

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: GraphQLID },
    response: { type: GraphQLString },
    userID: {
      type: UserType,
      resolve(parent, args) {
        const result = _.find(mockUsers, { id: parent.userID });

        return result;
      }
    },
    postID: {
      type: PostType,
      resolve(parent, args) {
        const result = _.find(mockPosts, { id: parent.postID });

        return result;
      }
    },
    parentCommentID: {
      type: CommentType,
      resolve(parent, args) {
        const result = _.find(mockComments, { id: parent.parentCommentID });

        return result;
      }
    }
  })
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    creator: {
      type: UserType,
      resolve(parent, args) {
        const result = _.find(mockUsers, { username: parent.creator });

        return result;
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        const results = _.filter(mockComments, { postID: parent.id });

        return results;
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Get Posts by Title
    postsByTitle: {
      type: new GraphQLList(PostType),
      args: {
        title: { type: GraphQLString }
      },
      resolve(parent, args) {
        const result = _.filter(mockPosts, { title: args.title });

        return result;
      }
    },

    // Get Post by ID
    postByID: {
      type: PostType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        const result = _.find(mockPosts, { id: args.id });

        return result;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Create a new Post
    createPost: {
      type: PostType,
      args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        creator: { type: GraphQLString }
      },
      resolve(parent, args) {
        let id = uuid.v4();
        let title = args.title;
        let body = args.body;
        let creator = args.creator;
        
        let post = {
          "id": id,
          "title": title,
          "body": body,
          "creator": creator
        }
        
        return post;
      }
    },

    // Comment on a Post (add new Comment)
    addComment: {
      type: CommentType,
      args: {
        response: { type: GraphQLString },
        userID: { type: GraphQLID },
        postID: { type: GraphQLID }
      },
      resolve(parent, args) {
        let id = uuid.v4();
        let response = args.response;
        let userID = args.userID;
        let postID = args.postID;

        let comment = {
          "id": id,
          "response": response,
          "userID": userID,
          "postID": postID,
          "parentCommentID": null
        }

        return comment;
      }
    },

    // Reply to a Comment (add Comment as a child to a parent Comment)
    addReply: {
      type: CommentType,
      args: {
        response: { type: GraphQLString },
        userID: { type: GraphQLID },
        postID: { type: GraphQLID },
        parentCommentID: { type: GraphQLID }
      },
      resolve(parent, args) {
        let id = uuid.v4();
        let response = args.response;
        let userID = args.userID;
        let postID = args.postID;
        let parentCommentID = args.parentCommentID;

        let reply = {
          "id": id,
          "response": response,
          "userID": userID,
          "postID": postID,
          "parentCommentID": parentCommentID
        }

        return reply;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
