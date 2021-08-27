import React, {useState} from 'react'
import * as CS from "./CommentSection.styles"
import {useLocalStorage} from "../../customHooks/useLocalStorage";
import {UserOutlined} from "@ant-design/icons";
import * as PS from "./Post.styles";
import {Comment} from "../../types";
import {useMutation} from "@apollo/client";
import {COMMENT_POST, GET_POSTS} from "../../util/graphql";

type CommentSectionProps = {
    comments: Comment[]
    postId: string
}

const CommentSection = ({comments, postId}: CommentSectionProps) => {

    const user = useLocalStorage('profile')?.user
    const [commentText, setComment] = useState('')
    const [commentPost] = useMutation(COMMENT_POST)

    const handleClick = async (e: any) => {
        if (e.key === 'Enter') {
            await commentPost({variables: {id: postId, comment: commentText}, refetchQueries: [{query: GET_POSTS}]})
            setComment('')
        }
    }

    return (
        <div>
            <CS.Comments>
                {
                    comments.slice(0, 3).map((comment: Comment) => (
                        <CS.CommentWrapper key={comment._id}>
                            <CS.Username key={comment._id}>{comment.username}: </CS.Username>
                            <CS.CommentText key={comment._id}>{comment.text}</CS.CommentText>
                        </CS.CommentWrapper>
                    ))
                }
                {comments.length > 3 ?
                    <CS.LoadMoreWrapper>
                        <CS.LoadMore>Load more comments...</CS.LoadMore>
                    </CS.LoadMoreWrapper> : null}
            </CS.Comments>
            <CS.CommentInputContainer>

                <PS.Avatar src={user?.profilePicture ? user?.profilePicture : null}
                           icon={!user?.profilePicture ? <UserOutlined/> : null}/>

                <CS.Input
                    placeholder={comments.length < 1 ? 'Be the first to comment...' : 'Comment...'}
                    onChange={(e) => setComment(e.target.value)}
                    onKeyDown={handleClick}
                    value={commentText}
                />
            </CS.CommentInputContainer>
        </div>
    )
}

export default CommentSection;