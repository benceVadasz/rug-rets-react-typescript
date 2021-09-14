import React from 'react'
import {PostData} from "../../types";
import * as PS from './Post.styles'
import {UserOutlined} from "@ant-design/icons";
import moment from 'moment';
import MySkeleton from "./Skeleton";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom'
import CommentIcon from '@material-ui/icons/Comment';

type PostProps = {
    post: PostData
}

const isUserPage = window.location.href.split('/').includes('user')

const Post = ({post}: PostProps) => {

    return (
        <div>
            {!post ? <MySkeleton/> :
                <PS.Post
                >
                    <PS.PostHeaderContainer>
                        <PS.InfoContainer>
                            {!isUserPage ?
                                <div>
                                    <PS.Avatar src={post.userId.profilePicture ? post.userId.profilePicture : null}
                                               icon={!post.profilePicture ? <UserOutlined/> : null}/>
                                    <PS.Link to={`/user/${post.userId.username}`}>
                                        {post.userId.username}
                                    </PS.Link>
                                </div> : null}
                            <PS.Text userpage={isUserPage? 'yes' : null} time='yes'>
                                {moment(post.createdAt).fromNow()}
                            </PS.Text>
                        </PS.InfoContainer>
                    </PS.PostHeaderContainer>
                    <Link to={"/post/" + post._id}>
                        <PS.Text message='yes'>
                            {post.message}
                        </PS.Text>
                    </Link>
                    <Link to={"/post/" + post._id}>
                        <PS.ImageContainer>
                            <PS.Image src={post.selectedFile}/>
                        </PS.ImageContainer>
                    </Link>
                    <PS.Info>
                        <FavoriteIcon/>{post.likes.length}
                        <CommentIcon/>{post.comments.length}
                    </PS.Info>
                </PS.Post>
            }
        </div>
    )
};

export default Post;