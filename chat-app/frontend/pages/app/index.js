import Chats from "../../src/components/Chats";
import axios from "axios";


export default function Index({ chats }){
    return (
        <Chats _chats={chats} />
    );
}

export async function getServerSideProps(context) {
    let _chats = [];
    const token = context.req?.cookies?.chatAppToken || null;

    if(token) {
        const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/chats", {
            headers: { Authorization: token }
        });
        const { success, chats } = data;
        if(success) {
            _chats = chats;
        }        
    }
    

    return {
        props: {
            chats: _chats,
        },
    };
}