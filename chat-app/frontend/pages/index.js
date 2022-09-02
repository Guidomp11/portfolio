import { useEffect } from "react";
import { IO } from "../src/backend";

export default function Home() {

  useEffect(() => {
    IO.emit("get_chats", "1");
  }, [])

  return (
    <div>
      
    </div>
  )
}
