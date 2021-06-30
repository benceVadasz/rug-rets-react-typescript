import React from 'react'
import Lottie from 'react-lottie';
import * as loading from '../assets/loading2.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

function Loading() {

    return (
        <Lottie options={defaultOptions} height={120} width={120}/>
)
}

export default Loading;
