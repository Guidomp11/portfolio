import { useEffect } from "react";
import { IO } from "../src/backend";

export default function Home() {

  useEffect(() => {
    IO.emit("get_chats", "user_id");
  }, [])

  return (
    <div>
      
    </div>
  )
}
