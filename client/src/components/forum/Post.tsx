import React from 'react'
import {PostData} from "../../types";
import * as PS from './Post.styles'
import {Menu} from 'antd';
import {DeleteOutlined, HeartOutlined, UserOutlined} from "@ant-design/icons";
import {useLocalStorage} from "../../customHooks/useLocalStorage";


type PostProps = {
    post: PostData
}

function handleMenuClick() {
    // message.info('Click on menu item.');
    // console.log('click', e);
}


const Post = ({post}: PostProps) => {
    const userState = useLocalStorage('profile')
    const userId = userState?.result._id ? userState.result._id : userState?.result.googleId



    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<HeartOutlined/>}>
                Like
            </Menu.Item>
            {userId !== post.user ? <Menu.Item key="2" icon={<UserOutlined/>}>
                Follow @user
            </Menu.Item> : null}
            {userId === post.user ? <Menu.Item key="3" icon={<DeleteOutlined/>}>
                Delete
            </Menu.Item> : null}
        </Menu>
    );

    return (
        <PS.Post
            // cover={post.selectedFile?<img alt="example" src={post.selectedFile} /> : null}
        >
            <PS.PostHeaderContainer>
                <PS.InfoContainer>
                <PS.Avatar icon={<UserOutlined/>}/>
                <PS.Text bold='yes'>
                    @User1249712
                </PS.Text>
                <PS.Text time='yes'>
                    12h ago
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