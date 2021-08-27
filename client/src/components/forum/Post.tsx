import React, {useState} from 'react'
import {PostData} from "../../types";
import * as PS from './Post.styles'
import {Menu} from 'antd';
import {UserOutlined} from "@ant-design/icons";
import {useLocalStorage} from "../../customHooks/useLocalStorage";
import moment from 'moment';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {useMutation} from "@apollo/client";
import {DELETE_POST, GET_POSTS, LIKE_POST} from "../../util/graphql";
import CommentSection from "./CommentSection";

type PostProps = {
    post: PostData
}


const Post = ({post}: PostProps) => {
    const userState = useLocalStorage('profile')
    const userId = userState?.user._id ? userState.user._id : userState?.user.googleId

    const [deletePost] = useMutation(DELETE_POST)
    const [likePost] = useMutation(LIKE_POST)
    const [liked, setLiked] = useState<boolean>(post.likes.includes(userId as string))

    const removePost = async (id: string) => {
        await deletePost({variables: {id}, refetchQueries: [{query: GET_POSTS}]})
    }

    const like = async (id: string) => {
        await likePost({variables: {id}, refetchQueries: [{query: GET_POSTS}]})
    }

    const moreThanOneLike = post.likes.length > 1


    const menu = (
        <Menu>
            {userId === post.userId._id ?
                <div>
                    <Menu.Item key="3" icon={<UpdateIcon/>}>Update</Menu.Item>
                    <Menu.Item key="3" onClick={() => removePost(post._id)}
                               icon={<DeleteOutlineIcon/>}>Delete</Menu.Item>
                </div> :
                <div>
                    <Menu.Item key="2" icon={<PersonAddIcon/>}>
                        Follow <span style={{fontWeight: 'bolder'}}>{post.username}</span>
                    </Menu.Item>
                    <Menu.Item key="1" onClick={() => {
                        setLiked(!liked)
                        like(post._id)
                    }} icon={<FavoriteBorderIcon/>}>
                        {liked ? 'unlike' : 'like'}
                    </Menu.Item>
                </div>}
        </Menu>
    );

    const CommentProps = {
        comments: post.comments,
        postId: post._id
    }

    return (
        <PS.Post
        >
            <PS.PostHeaderContainer>
                <PS.InfoContainer>
                    <PS.Avatar src={post.userId.profilePicture ? post.userId.profilePicture : null}
                               icon={!post.profilePicture ? <UserOutlined/> : null}/>
                    <PS.Text bold='yes'>
                        @{post.userId.username}
                    </PS.Text>
                    <PS.Text time='yes'>
                        {moment(post.createdAt).fromNow()}
                    </PS.Text>
                </PS.InfoContainer>
                <PS.Dropdown overlay={menu} placement="bottomCenter" icon={<PS.Ellipsis/>}>
                </PS.Dropdown>
            </PS.PostHeaderContainer>
            <PS.Text message='yes'>
                {post.message}
            </PS.Text>
            <PS.ImageContainer>
                <PS.Image src={post.selectedFile}/>
            </PS.ImageContainer>
            <PS.LikeContainer>{post.likes.length}{moreThanOneLike ? ' likes' : ' like'}</PS.LikeContainer>
            <CommentSection {...CommentProps}/>
        </PS.Post>
    )
}

export default Post;