import styles from "../styles/Chats.module.scss";

export default function ChatNavigation({ _chats, selectChat }) {
    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <h1>Chat App</h1>
            </div>
            <div className={styles.list}>
                {
                    _chats.map((_chat, idx) => (
                        <div 
                            key={idx}
                            className={styles.item}
                            onClick={() => selectChat(_chat.id)}
                        >
                            <img src="/vercel.svg" alt="avatar-image" />
                            <h4>{_chat.chat}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}