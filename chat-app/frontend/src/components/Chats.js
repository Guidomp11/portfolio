import { useState } from "react";
import axiosInstance from "../backend/axios.config";
import styles from "../styles/Chats.module.scss";
import Chat from "./Chat";
import ChatNavigation from "./ChatNavigation";
import CreateChat from "./CreateChat";

export default function Chats({ _chats }) {
    const [chat, setChat] = useState(null);
    const [createChat, setCreateChat] = useState(false);

    const selectChat = async (id, name) => {
        try {
            const response = await axiosInstance.get("/api/chats/"+id);
        
            const { success, messages } = response.data;
            
            if(success) setChat({chatName: name, messages});
        }catch(error) {
            console.log(error);
        }
    }

    return(
        <div className={styles.chats}>
            <ChatNavigation _chats={_chats} selectChat={selectChat} setCreateChat={(value) => setCreateChat(value)} />
            <Chat messages={chat?.messages || null} chatName={chat?.chatName} />
            {createChat && <CreateChat closeModal={() => setCreateChat(false)} />}
        </div>
    );
};