import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic, // state management, API calls
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "d440b4b8-4cea-45d1-a086-707c4b52e03d",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow style={{ height: "100%" }} {...chatProps} />
    </div>
  );
};

export default ChatsPage;
