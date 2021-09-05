import React from "react";
import Form from "./Form";
import Post from "./Post";
import {PostData} from "../../types";
import * as FS from './ForumFeed.styles'
import MySkeleton from "./Skeleton";
import notFound from '../../assets/no-search-result-removebg-preview.png'

type IFeedProps = {
    posts: PostData[]
    loading: boolean
}

function Feed({posts, loading} : IFeedProps) {

    return (
        <FS.Feed>
            <FS.FeedHeader>
                <h2>Home</h2>
            </FS.FeedHeader>

            <Form/>
            {loading ?
                <MySkeleton/> :
                posts.length === 0 ? <FS.Wrapper><FS.NoResultImg src={notFound}/></FS.Wrapper> :
                    posts.map((post: PostData) => (
                        <Post
                            key={post._id}
                            post={post}
                        />
                    ))
                }
        </FS.Feed>
    );
};

export default Feed;