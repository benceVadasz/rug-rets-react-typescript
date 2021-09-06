import React, {useEffect, useState} from 'react'
import * as SS from './Sidebar.styles'
import {useQuery} from "@apollo/client";
import {GET_USERNAMES_WITH_LIKE_COUNT} from "../../util/graphql";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {FeedHeader} from "./ForumFeed.styles";

type PostType = {
    likes: string[],
    userId: {
        username: string
        profilePicture: string
    }
}

const Sidebar = () => {

    const {data} = useQuery(GET_USERNAMES_WITH_LIKE_COUNT)
    const [parsing, setParsing] = useState(true)

    let likeCount: any = {}
    const [likeArray, setLikeArray] = useState<any>({})

    useEffect(() => {
        const fetchData = async () => {
            if (data) {
                groupByUserName(data.getPostsGroupedByUsers).finally(() => {setParsing(false)})
            }
        }
        fetchData()
    }, [data])

    const groupByUserName = async (posts: PostType[]) => {
        posts.forEach((post: PostType) => {
            likeCount[post.userId.username] = likeCount[post.userId.username] ?
                likeCount[post.userId.username] + post.likes.length : post.likes.length
        })
        setLikeArray(likeCount)
    }

    return (
        parsing? <SS.Loading/> :
        <SS.Container>
            <FeedHeader>
            <SS.SideBarTitle>Trending users</SS.SideBarTitle>
            </FeedHeader>
            {Object.keys(likeArray).map((key, index) =>
                    <SS.LikeCountContainer key={key}>
                        <SS.LikeCountUsername>@{key}</SS.LikeCountUsername>
                        <SS.LikeCount> {likeArray[key]}</SS.LikeCount>
                        <FavoriteBorderIcon style={{marginTop: 1}}/>
                    </SS.LikeCountContainer>
            )}
        </SS.Container>
    )
}

export default Sidebar;