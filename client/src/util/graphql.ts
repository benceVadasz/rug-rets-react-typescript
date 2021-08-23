import {gql} from "@apollo/client";

export const GET_COLORS = gql`
    query getColors{
        getColors{
            name
            value
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