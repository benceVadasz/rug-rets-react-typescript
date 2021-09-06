import {gql} from "graphql-tag";

export const GET_COLORS = gql`
    query getColors{
        getColors{
            name
            value
            _id
        }
    }
`

export const UPLOAD_COLOR = gql`
    mutation uploadColor($name: String!, $value: String!){
        uploadColor(name: $name, value: $value){
            user {
                username
                _id
            }
            color {
                name
                value
            }
        }
    }
`

export const LOGIN_MUTATION = gql`
    mutation signIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
            token
            user {
                username
                givenName
                familyName
                email
                _id
                phone
                profilePicture
            }
        }
    }
`

export const REGISTER_MUTATION = gql`
    mutation signUp($username: String!, $givenName: String!,
        $familyName: String!, $email: String!, $password: String!) {
        signUp(username: $username, givenName: $givenName, familyName: $familyName,
            email: $email, password: $password) {
            token
            user {
                username
                givenName
                familyName
                email
                _id
            }
        }
    }
`

export const GET_DESIGNS = gql`
    query getDesigns{
        getDesigns{
            name
            shape
            colors
        }
    }
`

export const GET_POSTS = gql`
    query getPosts($searchQuery: String){
        getPosts(searchQuery: $searchQuery){
            _id
            selectedFile
            message
            createdAt
            userId {
                profilePicture
                username
            }
            likes
            comments {
                username
                text
                createdAt
            }

        }
    }
`

export const UPLOAD_POST = gql`
    mutation uploadPost($message: String!, $selectedFile: String){
        uploadPost(message: $message, selectedFile: $selectedFile){
            post{
                message
            }
        }
    }
`

export const DELETE_COLOR = gql`
    mutation deleteColor($id: ID!){
        deleteColor(id: $id)
    }
`

export const SAVE_DESIGN = gql`
    mutation uploadDesign($name: String!, $colors: [String!]!, $shape: String!){
        uploadDesign(name: $name, colors: $colors, shape: $shape){
            design {
                name
                shape
                colors
            }
        }
    }
`

export const DELETE_POST = gql`
    mutation deletePost($id: ID!){
        deletePost(id: $id)
    }
`

export const LIKE_POST = gql`
    mutation likePost($id: ID!) {
        likePost(id: $id){
            post{
                message
                likes
            }
        }
    }
`

export const UPDATE_PROFILE = gql`
    mutation updateProfile($username: String!, $givenName: String!,
        $familyName: String!, $email: String!, $profilePicture: String, $phone: String) {
        updateProfile(
            username: $username
            email: $email
            givenName: $givenName
            familyName: $familyName
            phone: $phone
            profilePicture: $profilePicture
        ) {
            profilePicture
            _id
        }
    }
`

export const COMMENT_POST = gql`
    mutation commentPost($id: ID!, $comment: String!) {
        commentPost(id: $id, comment: $comment) {
            comments {
                username
            }
        }
    }
`

export const ME = gql`
    query me{
        me{
            username
            profilePicture
        }
    }
`

export const GET_POST = gql`
    query getPost($id: ID!){
        getPost(id: $id) {
            _id
            userId {
                username
                profilePicture
                _id
            }
            message
            comments{
                username
                text
                createdAt
            }
            selectedFile
            likes
            createdAt
        }
    }
`

export const GET_POSTS_BY_CREATOR = gql`
    query getPostsByCreator($id: ID!){
        getPostsByCreator(id: $id){
            posts{
                likes
            }
        }
    }
`

export const GET_USERNAMES_WITH_LIKE_COUNT = gql`
    query getPostsGroupedByUsers{
        getPostsGroupedByUsers {
            likes
            userId {
                username
                profilePicture
            }
        }
    }
`

