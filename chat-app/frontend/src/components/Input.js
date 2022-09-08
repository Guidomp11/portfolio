import styles from "../styles/Chats.module.scss";

export default function Input() {
    return(
        <div className={styles.inputContainer}>
            <input name="message" />
        </div>
    );
}