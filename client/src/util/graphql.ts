import {gql} from "@apollo/client";

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
    query getPosts{
        getPosts {
            _id
            selectedFile
            message
            userId
            createdAt
            username
            userId
            likes
            comments {
                username
                text
            }
        }
    }
`

export const UPLOAD_POST = gql`
    mutation uploadPost($message: String!, $selectedFile: String){
        uploadPost(message: $message, selectedFile: $selectedFile){
            post{
                username
                userId

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