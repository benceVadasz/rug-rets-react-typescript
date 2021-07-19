import styled from "@emotion/styled";
import {Form, Button as AntButton, Typography} from "antd";

export const Paper = styled.div({
    alignItems: "center",
    display: "flex",
    flexFlow: "column",
    height: '80vh',
});

export const Text = styled(Typography)({

})

export const Container = styled(Form)({
    height: 550,
    alignSelf: 'flex-start',
    margin: '50px 0 0 50px',
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'column',
});

export const Title = styled.div({
    alignSelf: 'flex-start',
    margin: '50px 0 0 50px'
});

export const Button = styled(AntButton)({
    backgroundColor: '#2D2D2D',
    width: 300,
    marginTop: 30,
    '&:hover': {
        backgroundColor: '#424642',
    }
});
// export const Disabled = styled {
//     backgroundColor: '#DDDDDD',
//         color: 'white !important',
//         fontFamily: "'IBM Plex Mono', monospace !important",
//         width: 300,
//         marginTop: 30
// },
export const FormItem = styled(Form.Item)({
    width: 300,
    borderRadius: 0
});