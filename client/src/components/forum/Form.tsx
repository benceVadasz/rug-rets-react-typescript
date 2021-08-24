import React, {useState} from "react";
import "./TweetBox.css";
import FileBase from 'react-file-base64';
import * as FS from './Form.styles'
import {UploadedPost} from "../../types";
import {Avatar} from "antd";
import {useLocalStorage} from "../../customHooks/useLocalStorage";
import {UserOutlined} from "@ant-design/icons";
import {useMutation} from "@apollo/client";
import {GET_POSTS, UPLOAD_POST} from "../../util/graphql";

const Form = () => {
    const [uploadPost] = useMutation(UPLOAD_POST)
    const user = useLocalStorage('profile')?.user
    const [postData, setPostData] = useState<UploadedPost>({message: '', selectedFile: ''});

    const submit = async () => {
        await uploadPost({variables: postData, refetchQueries : [{ query: GET_POSTS }]})
        setPostData({message: '', selectedFile: ''})
    }

    return (
        <FS.Container>
            <FS.Form onFinish={submit}>
                <FS.InputBox>
                    <Avatar size={42} src={user?.profilePicture} icon={<UserOutlined/>} />
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