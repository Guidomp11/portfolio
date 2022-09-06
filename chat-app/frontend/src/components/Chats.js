import { useState } from "react";
import styles from "../styles/Chats.module.scss";
import Chat from "./Chat";
import ChatNavigation from "./ChatNavigation";

export default function Chats({ _chats }) {
    const [chat, setChat] = useState(null);
    const selectChat = (id) => {
        console.log(id);
        setChat({
            id: 1,
            chat: "Nombre del Chat",
            messages: [
                {owner: "aaaaaa", message: "Hola"},
                {owner: "bbbbbb", message: "Hola, como estas?"},
                {owner: "aaaaaa", message: "todo bien"},
                {owner: "aaaaaa", message: "vos?"},
                {owner: "bbbbbb", message: "bn"},
            ]
        });
    }

    return(
        <div className={styles.chats}>
            <ChatNavigation _chats={_chats} selectChat={selectChat} />
            <Chat chat={chat} />
        </div>
    );
};