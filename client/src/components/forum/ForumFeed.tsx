import React, {useEffect, useState} from "react";
import Form from "./Form";
import Post from "./Post";
import {PostData} from "../../types";
import * as FS from './ForumFeed.styles'
import MySkeleton from "./Skeleton";
import {useQuery} from "@apollo/client";
import {GET_POSTS} from "../../util/graphql";

function Feed() {

    const {data, loading} = useQuery(GET_POSTS)

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (data) {
            setPosts(data.getPosts)
        }
    }, [data])

    return (
        <FS.Feed>
            <FS.FeedHeader>
                <h2>Home</h2>
            </FS.FeedHeader>

            <Form/>
            {loading ?
                <MySkeleton/> :
                posts.map((post: PostData) => (
                    <Post
                        key={post._id}
                        post={post}
                    />
                ))}
        </FS.Feed>
    );
}

export default Feed;