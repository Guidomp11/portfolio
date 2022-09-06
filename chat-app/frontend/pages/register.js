import { useState } from "react";
import styles from "../src/styles/Forms.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { saveToken } from "../src/backend"

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState("");
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

  const onSubmit = async () => {
    try{
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/api/auth/register`, {
        user: {
          email,
          username,
          password,
          avatar: "default-avatar.png"
        }
      });
      
      if(!data.success) throw new Error("Registration Error");

      saveToken(data.user.token);
      router.push("/app/chats");
    }catch(error) {
      const { message } = error.response.data;
      setError(message || "Registration Error.");
    }
  }

  return (
    <div className={styles.form}>
        <div className={styles.formContent}>
            <h1>Register</h1>

            {error && <p style={{color: "red", width: "100%", textAlign: "center"}} >Error: {error}</p>}

            <label>E-mail</label>
            <input name="email" type="email" value={email} onChange={onChange} />
            <label>Username</label>
            <input name="username" type="text" value={username} onChange={onChange} />
            <label>Password</label>
            <input name="password" type="password" value={password} onChange={onChange} />
            <label>Confirm Password</label>
            <input name="confirm_password" type="password" value={confirm_password} onChange={onChange} />

            <button
              onClick={onSubmit}
            >Register</button>
        </div>
    </div>
  )
}
