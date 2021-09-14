import React, {useEffect, useState} from 'react'
import ForumFeed from "../components/forum/ForumFeed";
import Sidebar from "../components/forum/Sidebar";
import Searchbar from "../components/forum/Searchbar";
import {Container} from "./Forum.styles";
import {useQuery} from "@apollo/client";
import {GET_POSTS} from "../util/graphql";

const Forum = () => {

    const [searchQuery, setSearchQuery] = useState('')

    const {data, loading} = useQuery(GET_POSTS, {variables: {searchQuery: searchQuery}})

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (data) {
            setPosts(data.getPosts)
        }
    }, [data, searchQuery])

    const props = {
        posts,
        loading
    }

    return (
        <Container>
            <div style={{width: '100%', gridArea: '1 / 1 / 6 / 3', padding: 10}}>
                <Sidebar/>
            </div>
            <ForumFeed {...props}/>
            <Searchbar search={setSearchQuery}/>
        </Container>
    )
}

export default Forum;