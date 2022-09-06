import styles from "../styles/Chats.module.scss";

export default function Chat({ chat }) {
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
                {
                    chat.messages.map((message, idx) => (
                        <div key={idx} className={styles.message}>
                            <p>{message.owner}</p>
                            <p>{message.message}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};