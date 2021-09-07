import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import Sidebar from "./Sidebar";
import {Container} from "../../pages/Forum.styles";
import {Feed, FeedHeader} from "./ForumFeed.styles";
import {useQuery} from "@apollo/client";
import {GET_POSTS_BY_CREATOR} from "../../util/graphql";
import Skeleton from "./Skeleton";
import {PostData} from "../../types";
import Post from "./Post";
import * as SS from "./Sidebar.styles";

const UserPage = () => {
    const {username}: { username: '' } = useParams()

    const {data, loading} = useQuery(GET_POSTS_BY_CREATOR, {variables: {username}})
    const [posts, setPosts] = useState([])


    useEffect(() => {
        if (data) {
            setPosts(data.getPostsByCreator)
            console.log(posts)
        }
    }, [data])

    return (
        <Container>
            <Sidebar/>
            <Feed>
                <FeedHeader>
                    <SS.SideBarTitle>Posts</SS.SideBarTitle>
                </FeedHeader>
                {loading ? <Skeleton/> :
                    <div>
                        {posts.map((post: PostData) => <Post post={post}/>)}
                    </div>
                }
            </Feed>
        </Container>
    )
}

export default UserPage;