import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

const Form = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="Share it..."
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                <Button
                    // onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Go!
                </Button>
            </form>
        </div>
    );
}

export default Form;