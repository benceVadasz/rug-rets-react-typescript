import React, {useEffect, useState} from 'react'
import {Container} from "../../pages/Forum.styles";
import Sidebar from "./Sidebar";
import {useParams} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import {DELETE_POST, GET_POST, GET_POSTS, LIKE_POST, UPDATE_POST} from "../../util/graphql";
import {Feed} from './ForumFeed.styles'
import {defaultPostData, PostData, UploadedPost} from "../../types";
import {Menu} from "antd";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MySkeleton from "./Skeleton";
import * as PS from "./Post.styles";
import {UserOutlined} from "@ant-design/icons";
import moment from "moment";
import CommentSection from "./CommentSection";
import {useLocalStorage} from "../../customHooks/useLocalStorage";
import {useHistory} from "react-router-dom";
import {Input} from './Post.styles'
import FileBase from 'react-file-base64';
import {Button} from './Post.styles'

const PostDetails = () => {
    const [post, setPost] = useState<PostData>(defaultPostData)
    const {id}: { id: "" } = useParams()
    const [postData, setPostData] = useState<UploadedPost>({message: post.message, selectedFile: ''});
    const [updatePost] = useMutation(UPDATE_POST)


    const userState = useLocalStorage('profile')
    const userId = userState?.user._id ? userState.user._id : userState?.user.googleId

    const {data, loading} = useQuery(GET_POST, {variables: {id}})

    const [deletePost] = useMutation(DELETE_POST)
    const [likePost] = useMutation(LIKE_POST)
    const [liked, setLiked] = useState<boolean>(false)
    const [editing, setEditing] = useState<boolean>(false)

    const moreThanOneLike = post.likes?.length > 1

    useEffect(() => {
        if (data) {
            setPost(data.getPost)
            setLiked(data.getPost.likes?.includes(userId as string))
        }
    }, [data])

    const history = useHistory()
    const removePost = async () => {
        await deletePost({variables: {id: post._id}, refetchQueries: [{query: GET_POSTS}]})
        history.push('/forum')
    }

    const like = async () => {
        await likePost({variables: {id: post._id}, refetchQueries: [{query: GET_POSTS}]})
    }

    const editPost = async () => {
        setEditing(true)
    }

    const menu = (
        <Menu>
            {userId === post.userId._id ?
                <Menu.ItemGroup key="g1">
                    <Menu.Item key="3" onClick={editPost} icon={<UpdateIcon/>}>Update</Menu.Item>
                    <Menu.Item key="4" onClick={removePost}
                               icon={<DeleteOutlineIcon/>}>Delete</Menu.Item>
                </Menu.ItemGroup>
                :
                <Menu.ItemGroup key="g2">
                    <Menu.Item key="2" icon={<PersonAddIcon/>}>
                        Follow <span style={{fontWeight: 'bolder'}}>{post.username}</span>
                    </Menu.Item>
                    {loading ? null :
                        <Menu.Item key="1" onClick={() => {
                            setLiked(!liked)
                            like()
                        }} icon={<FavoriteBorderIcon/>}>
                            {liked ? 'unlike' : 'like'}
                        </Menu.Item>}
                </Menu.ItemGroup>
            }
        </Menu>)

    const CommentProps = {
        comments: [...post.comments].reverse(),
        postId: post._id,
    }

    const submit = async () => {
        await updatePost(
            {variables: {...postData, id: post._id},
                refetchQueries: [{query: GET_POST, variables: {id: post._id}}]}
            )
        setEditing(false)
    }

    return (
        <Container>
            <Sidebar/>
            <Feed>
                {loading ? <MySkeleton/> :
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
                            {userState?.user ?
                                <PS.Dropdown overlay={menu} placement="bottomCenter" icon={<PS.Ellipsis/>}>
                                </PS.Dropdown> : null}
                        </PS.PostHeaderContainer>
                        {!editing ? <PS.Text message='yes'>
                                {post.message}
                            </PS.Text> :
                            <PS.InputContainer>
                                <Input
                                    value={postData.message}
                                    onChange={(e) => setPostData({...postData, message: e.target.value})}
                                />
                            </PS.InputContainer>
                        }
                        <PS.ImageContainer>
                            <PS.Image src={post.selectedFile}/>
                        </PS.ImageContainer>
                        {!editing ?
                            <PS.LikeContainer>{post.likes.length}{moreThanOneLike ? ' likes' : ' like'}</PS.LikeContainer> :
                            <PS.FileUploadContainer>
                                <PS.Text>Choose another image</PS.Text>
                                <PS.ButtonGroup>
                                    <FileBase type="file" multiple={false}
                                              style={{color: 'white'}}
                                              onDone={({base64}: any) => setPostData({
                                                  ...postData,
                                                  selectedFile: base64
                                              })}
                                    />
                                    <Button onClick={submit}>
                                        Update
                                    </Button>
                                </PS.ButtonGroup>
                            </PS.FileUploadContainer>
                        }
                        {!editing ? <CommentSection {...CommentProps}/> : null}
                    </PS.Post>
                }
            </Feed>
        </Container>
    )
}

export default PostDetails;