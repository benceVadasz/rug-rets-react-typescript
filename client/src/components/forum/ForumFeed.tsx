import React, {useEffect} from "react";
import Form from "./Form";
import Post from "./Post";
import "./Feed.css";
import {getPosts} from "../../state/actions/posts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {PostData} from "../../types";

function Feed() {
    const dispatch = useDispatch()
    const posts = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <Form/>
                {posts?.length > 0 && posts.map((post: PostData) => (
                    <Post
                        key={post._id}
                        post={post}
                    />
                ))}
        </div>
    );
}

export default Feed;