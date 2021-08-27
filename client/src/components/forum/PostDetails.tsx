import React, {useEffect, useState} from 'react'
import {Container} from "../../pages/Forum.styles";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_POST} from "../../util/graphql";
import Post from "./Post";

const PostDetails = () => {
    const [post, setPost] = useState<any>({})
    const {id}: {id: ""} = useParams()
    const {data} = useQuery(GET_POST, {variables: {id}})

    useEffect(() => {
        setPost(data.getPost)
    }, [data])

  return (
        <Container>
            <Sidebar/>
                <Post post={post}/>
            <Searchbar/>
        </Container>
  )
}

export default PostDetails;