import { useState } from "react";
import axiosInstance from "../backend/axios.config";
import styles from "../styles/Chats.module.scss";
import Chat from "./Chat";
import ChatNavigation from "./ChatNavigation";

export default function Chats({ _chats }) {
    const [chat, setChat] = useState(null);

    const selectChat = async (id) => {
        const response = await axiosInstance.get("/api/chats/"+id);
        
        const { success, messages } = response.data;
        setChat(messages);
    }

    return(
        <div className={styles.chats}>
            <ChatNavigation _chats={_chats} selectChat={selectChat} />
            <Chat messages={chat} />
        </div>
    );
};