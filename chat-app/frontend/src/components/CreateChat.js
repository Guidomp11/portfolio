import styles from "../styles/Forms.module.scss";

export default function CreateChat({ closeModal }) {

  const fnCreateChat = () => {
    closeModal();
  }

  return (
    <div className={styles.createChatForm}>
      <div className={styles.form}>
        <p onClick={closeModal}>X</p>
        <label>Chat Name</label>
        <input name="chatName" placeholder="Chat Name" />

        <button
          onClick={fnCreateChat}
        >Create</button>
      </div>
    </div>
  );
}