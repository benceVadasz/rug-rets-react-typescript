import React, {useState} from "react";
import "./TweetBox.css";
import {Button} from "@material-ui/core";
import FileBase from 'react-file-base64';
import * as FS from './Form.styles'

type PostData = {
    creator: string,
    message: string,
    selectedFile: string
}

const Form = () => {

    const [postData, setPostData] = useState<PostData>({creator: '', message: '', selectedFile: ''});

    const submit = () => {
        console.log(postData)
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