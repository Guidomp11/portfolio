import { useState } from "react";
import styles from "../src/styles/Forms.module.scss";

export default function Login() {

  const [authentication, setAuthentication] = useState({
    email: "",
    password: ""
  });

  const { email, password } = authentication;

  const onChange = (event) => {
    setAuthentication({
      ...authentication,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className={styles.form}>
        <div className={styles.formContent}>
            <h1>Log In</h1>
            <label>E-mail</label>
            <input name="email" type="email" value={email} onChange={onChange} />
            <label>Password</label>
            <input name="password" type="password" value={password} onChange={onChange} />

            <button>Log In</button>
        </div>
    </div>
  )
}
