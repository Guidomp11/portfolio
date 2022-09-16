import { useState } from "react";
import styles from "../src/styles/Forms.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { saveToken } from "../src/backend"

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
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

  const onSubmit = async () => {
    try{
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        credentials: {
          email,
          password,
        }
      });
      
      if(!data.success) throw new Error("Registration Error");
      
      saveToken(data.user.token);
      router.push("/app");
    }catch(error) {
      const { message } = error.response.data;
      setError(message || "Registration Error.");
    }
  }

  return (
    <div className={styles.form}>
        <div className={styles.formContent}>
            <h1>Log In</h1>

            {error && <p style={{color: "red", width: "100%", textAlign: "center"}} >Error: {error}</p>}

            <label>E-mail</label>
            <input name="email" type="email" value={email} onChange={onChange} />
            <label>Password</label>
            <input name="password" type="password" value={password} onChange={onChange} />

            <button
              onClick={onSubmit}
            >Log In</button>
        </div>
    </div>
  )
}
