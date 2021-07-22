import React, {useEffect, useState} from "react";
import Form from "./Form";
import Post from "./Post";
import {getPosts} from "../../state/actions/posts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {PostData} from "../../types";
import * as FS from './ForumFeed.styles'
import MySkeleton from "./Skeleton";

function Feed() {
    const dispatch = useDispatch()
    const posts = useSelector((state: RootState) => state.posts);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        dispatch(getPosts())
        setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts])

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