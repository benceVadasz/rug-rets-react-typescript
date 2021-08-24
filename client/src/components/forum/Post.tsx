import React from 'react'
import {PostData} from "../../types";
import * as PS from './Post.styles'
import {Menu} from 'antd';
import {DeleteOutlined, HeartOutlined, UserOutlined} from "@ant-design/icons";
import {useLocalStorage} from "../../customHooks/useLocalStorage";
import moment from 'moment';


type PostProps = {
    post: PostData
}

function handleMenuClick() {
    // message.info('Click on menu item.');
    // console.log('click', e);
}


const Post = ({post}: PostProps) => {
    const userState = useLocalStorage('profile')
    const userId = userState?.user._id ? userState.user._id : userState?.user.googleId

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<HeartOutlined/>}>
                Like
            </Menu.Item>
            {userId !== post.userId ? <Menu.Item key="2" icon={<UserOutlined/>}>
                Follow {post.username}
            </Menu.Item> : null}
            {userId === post.userId ? <Menu.Item key="3" icon={<DeleteOutlined/>}>
                Delete
            </Menu.Item> : null}
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