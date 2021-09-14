import React from 'react'
import {MESSAGE_SUBSCRIPTION} from "../../util/graphql";
import {useSubscription} from "@apollo/client";

const ChatPage = () => {

    const { data } = useSubscription(MESSAGE_SUBSCRIPTION);
    if (!data) {
        return null;
    }

    console.log(data)

  return (
    <div>
      Chat page
    </div>
  )
}

export default ChatPage;