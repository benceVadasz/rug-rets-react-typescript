import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import * as US from './UserPage.styles'
import {Container} from "../../pages/Forum.styles";
import {Feed, FeedHeader} from "./ForumFeed.styles";
import {useQuery} from "@apollo/client";
import {GET_POSTS_BY_CREATOR} from "../../util/graphql";
import Skeleton from "./Skeleton";
import {defaultUserData, PostData, User} from "../../types";
import Post from "./Post";
import * as SS from "./Sidebar.styles";

const UserPage = () => {
    const {username}: { username: '' } = useParams()

    const {data, loading} = useQuery(GET_POSTS_BY_CREATOR, {variables: {username}})
    const [posts, setPosts] = useState<PostData[]>([])
    const [user, setUser] = useState<User>(defaultUserData)


    useEffect(() => {
        if (data) {
            setPosts(data.getPostsByCreator)
            setUser(data.getPostsByCreator[0].userId)
        }
    }, [data])

    console.log(user)
    return (
        <Container>
            <Feed>
                <FeedHeader>
                    <SS.SideBarTitle> Profile</SS.SideBarTitle>
                </FeedHeader>
                {user.profilePicture ?
                    <US.ProfileWrapper>
                        <US.ProfilePicture src={user.profilePicture}/>
                        <US.Horizontal>
                            <US.Name>{`${user.givenName} ${user.familyName}`}</US.Name>
                            <US.Username>@{user.username}</US.Username>
                            <US.Email>{user.email}</US.Email>
                        </US.Horizontal>
                    </US.ProfileWrapper> : <Skeleton/>}
                <FeedHeader>
                    <SS.SideBarTitle>Posts</SS.SideBarTitle>
                </FeedHeader>
                {loading ? <Skeleton/> :
                    <div>
                        {posts.map((post: PostData) => <Post key={post._id} post={post}/>)}
                    </div>
                }
            </Feed>
        </Container>
    )
}

export default UserPage;