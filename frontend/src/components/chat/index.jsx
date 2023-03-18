import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

const Chat = () => {
  const chatprops = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "ayush",
    "1234"
  );
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatprops} />
      <MultiChatWindow
      {...chatprops} style={{height: "100vh"}} />
    </div>
  );
};

export default Chat;
