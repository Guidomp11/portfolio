import styles from "../styles/Chats.module.scss";
import Input from "./Input";

export default function Chat({ messages }) {
    const user = "Guidop1";
    
    if(!messages) {
        return <div className={styles.chat} />
    }
    
    return(
        <div className={styles.chat}>
            <div className={styles.header}>
                <h1>{messages[0].message_owner.username}</h1>
                <img src="/vercel.svg" alt="avatar-image" />
            </div>
            <div className={styles.body}>
                <div className={styles.messages}>
                    {
                        messages.map((message, idx) => (
                            <div key={idx} className={`${styles.message} ${message.message_owner.username === user ? styles.myMessage : ""}`}>
                                <p className={styles.owner}>{message.message_owner.username}</p>
                                <p>{message.message}</p>
                            </div>
                        ))
                    }
                </div>
                <Input />
            </div>
        </div>
    );
};