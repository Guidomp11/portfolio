import styles from "../styles/Chats.module.scss";
import Input from "./Input";

export default function Chat({ chat }) {
    const user = "aaaaaa";

    if(!chat) {
        return <div className={styles.chat} />
    }
    return(
        <div className={styles.chat}>
            <div className={styles.header}>
                <h1>{chat.chat}</h1>
                <img src="/vercel.svg" alt="avatar-image" />
            </div>
            <div className={styles.body}>
                <div className={styles.messages}>
                    {
                        chat.messages.map((message, idx) => (
                            <div key={idx} className={`${styles.message} ${message.owner === user ? styles.myMessage : ""}`}>
                                <p className={styles.owner}>{message.owner}</p>
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