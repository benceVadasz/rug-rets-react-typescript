import React, {useEffect} from "react";
import Form from "./Form";
import Post from "./Post";
import {getPosts} from "../../state/actions/posts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {PostData} from "../../types";
import * as FS from './ForumFeed.styles'

function Feed() {
    const dispatch = useDispatch()
    const posts = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        dispatch(getPosts())
    }, [posts])

    return (
        <FS.Feed>
            <FS.FeedHeader>
                <h2>Home</h2>
            </FS.FeedHeader>

            <Form/>
                {posts?.length > 0 && posts.map((post: PostData) => (
                    <Post
                        key={post._id}
                        post={post}
                    />
                ))}
        </FS.Feed>
    );
}

export default Feed;