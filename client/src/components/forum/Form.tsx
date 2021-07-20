import React, {useState} from "react";
import "./TweetBox.css";
import FileBase from 'react-file-base64';
import * as FS from './Form.styles'
import {useDispatch} from "react-redux";
import {createPost} from "../../state/actions/posts";
import {UploadedPost} from "../../types";

const Form = () => {

    const dispatch = useDispatch()
    const [postData, setPostData] = useState<UploadedPost>({message: '', selectedFile: ''});

    const submit = () => {
        dispatch(createPost(postData))
    }

    return (
        <FS.Container>
            <FS.Form onFinish={submit}>
                <FS.InputBox>
                    <FS.Input
                        onChange={(e) => setPostData({...postData, message: e.target.value})}
                        value={postData.message}
                        placeholder="Share it..."
                        type="text"
                    />
                </FS.InputBox>
                <FileBase type="file" multiple={false}
                          style={{color: 'white'}}
                          onDone={({base64}: any) => setPostData({...postData, selectedFile: base64})}
                />

                <FS.Button
                    htmlType="submit"
                >
                    Go!
                </FS.Button>
            </FS.Form>
        </FS.Container>
    );
}

export default Form;