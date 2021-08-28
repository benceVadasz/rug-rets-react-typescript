import React, {useState} from 'react'
import * as CS from "./CommentSection.styles"
import {useLocalStorage} from "../../customHooks/useLocalStorage";
import {UserOutlined} from "@ant-design/icons";
import * as PS from "./Post.styles";
import {Comment} from "../../types";
import {useMutation} from "@apollo/client";
import {COMMENT_POST, GET_POST} from "../../util/graphql";

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
            await commentPost({variables: {id: postId, comment: commentText},
                refetchQueries: [{query: GET_POST, variables: {id: postId}}]})
            setComment('')
        }
    }

    console.log(comments)

    return (
        <div>
            <CS.Comments>
                {
                    comments.map((comment: Comment) => (
                        <CS.CommentWrapper key={comment.createdAt}>
                            <CS.Username>{comment.username}: </CS.Username>
                            <CS.CommentText>{comment.text}</CS.CommentText>
                        </CS.CommentWrapper>
                    ))
                }
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