import { useState } from "react";
import styles from "../src/styles/Forms.module.scss";

export default function Register() {

  const [authentication, setAuthentication] = useState({
    email: "",
    username: "",
    confirm_password: "",
    password: ""
  });

  const { email, username, password, confirm_password } = authentication;

  const onChange = (event) => {
    setAuthentication({
      ...authentication,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className={styles.form}>
        <div className={styles.formContent}>
            <h1>Register</h1>
            <label>E-mail</label>
            <input name="email" type="email" value={email} onChange={onChange} />
            <label>Username</label>
            <input name="username" type="text" value={username} onChange={onChange} />
            <label>Password</label>
            <input name="password" type="password" value={password} onChange={onChange} />
            <label>Confirm Password</label>
            <input name="confirm_password" type="password" value={confirm_password} onChange={onChange} />

            <button>Register</button>
        </div>
    </div>
  )
}
