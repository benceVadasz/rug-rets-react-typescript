import React from 'react'
import ForumFeed from "../components/forum/ForumFeed";
import Sidebar from "../components/forum/Sidebar";
import Searchbar from "../components/forum/Searchbar";
import {Container} from "./Forum.styles";

const Forum = () => {
    return (
        <Container>
            <Sidebar/>
            <ForumFeed/>
            <Searchbar/>
        </Container>
    )
}

export default Forum;