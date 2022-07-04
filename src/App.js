import Users from "./components/Users/Users";
import {getPosts} from "./services/user.api.services";
import {useState} from "react";
import Posts from "./components/Users/posts";


export default function App() {

let [posts, setposts] = useState([]);
    const elevate = (id) => {
        getPosts(id).then(({data}) => {
            setposts([...data]);
        })

    }
    return (
        <div>
            <Users elevate={elevate}/>
                 <Posts   posts={posts}/>
        </div>
    );
}


