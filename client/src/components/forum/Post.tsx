import React from 'react'
import {PostData, UploadedPost} from "../../types";

type PostProps = {
  post: UploadedPost
}

const Post = ({post}: PostProps) => {
  return (
      <div className="post">
        <h2>{post.message}</h2>
      </div>
  )
}

export default Post;