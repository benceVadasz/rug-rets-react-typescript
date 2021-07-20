import React, {useEffect, useState} from "react";
import Form from "./Form";
import Post from "./Post";
import "./Feed.css";
import FlipMove from "react-flip-move";
import {getPosts} from "../../state/actions/posts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import * as DS from "../../pages/DesignDetail.styles";
import Loading from "../../util/Loading";
import {PostData} from "../../types";

function Feed() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const posts = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        setLoading(true)
        dispatch(getPosts())
        setLoading(false)
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