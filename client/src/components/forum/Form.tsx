import React, {useState} from "react";
import "./TweetBox.css";
import FileBase from 'react-file-base64';
import * as FS from './Form.styles'
import {useDispatch} from "react-redux";
import {createPost} from "../../state/actions/posts";
import {UploadedPost} from "../../types";
import {Avatar} from "antd";
import {useLocalStorage} from "../../customHooks/useLocalStorage";
import {UserOutlined} from "@ant-design/icons";

const Form = () => {
    const user = useLocalStorage('profile')?.user
    const dispatch = useDispatch()
    const [postData, setPostData] = useState<UploadedPost>({message: '', selectedFile: ''});

    const submit = () => {
        dispatch(createPost(postData))
        setPostData({message: '', selectedFile: ''})
    }

    console.log(user?.imageUrl)

    return (
        <FS.Container>
            <FS.Form onFinish={submit}>
                <FS.InputBox>
                    <Avatar src={user?.imageUrl} icon={<UserOutlined/>} />
                    <FS.Input
                        onChange={(e) => setPostData({...postData, message: e.target.value})}
                        value={postData.message}
                        placeholder="Share it..."
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