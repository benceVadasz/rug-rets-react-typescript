import React from 'react'
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
import {DELETE_POST, GET_POSTS} from "../../util/graphql";


type PostProps = {
    post: PostData
}


const Post = ({post}: PostProps) => {
    const userState = useLocalStorage('profile')
    const userId = userState?.user._id ? userState.user._id : userState?.user.googleId

    const [deletePost] = useMutation(DELETE_POST)

    const removePost = async (id: string) => {
        console.log(id)
        await deletePost({variables: {id}, refetchQueries: [{query: GET_POSTS}]})
    }

    const menu = (
        <Menu>
            {userId === post.userId ?
                <div>
                    <Menu.Item key="3" icon={<UpdateIcon/>}>Update</Menu.Item>
                    <Menu.Item key="3" onClick={() => removePost(post._id)} icon={<DeleteOutlineIcon/>}>Delete</Menu.Item>
                </div> :
                <div>
                    <Menu.Item key="2" icon={<PersonAddIcon/>}>
                        Follow {post.username}</Menu.Item>
                    <Menu.Item key="1" icon={<FavoriteBorderIcon/>}>Like</Menu.Item>
                </div>}
        </Menu>
    );

    return (
        <PS.Post
        >
            <PS.PostHeaderContainer>
                <PS.InfoContainer>
                <PS.Avatar icon={<UserOutlined/>}/>
                <PS.Text bold='yes'>
                    @{post.username}
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

        </PS.Post>
    )
}

export default Post;